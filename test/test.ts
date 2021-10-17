import { once } from 'events'

import { assert } from 'chai'

import { LiveWS, LiveTCP, KeepLiveWS, KeepLiveTCP, getConf } from '..'

const TIMEOUT = 1000 * 25
const watch = (live: LiveWS | LiveTCP | KeepLiveWS | KeepLiveTCP) => setTimeout(() => {
  if (!live.closed) {
    live.close()
  }
}, TIMEOUT)

Object.entries({ LiveWS, LiveTCP, KeepLiveWS, KeepLiveTCP })
  .forEach(([name, Live]) => {
    describe(name, function() {
      this.retries(4)
      this.timeout(1000 * 25)
      context('Connect', function() {
        it('online', async function() {
          const live = new Live(12235923)
          watch(live)
          const [online] = await once(live, 'heartbeat')
          live.close()
          return assert.isAbove(online, 0)
        })
        it('roomid must be number', function() {
          // @ts-ignore
          return assert.throw(() => new Live('12235923'))
        })
        it('roomid can not be NaN', function() {
          return assert.throw(() => new Live(NaN))
        })
      })
      context('properties', function() {
        context('roomid', function() {
          Object.entries({ Mea: 12235923, nana: 21304638, fubuki: 11588230 })
            .forEach(([name, roomid]) => {
              it(`roomid ${name}`, async function() {
                const live = new Live(roomid)
                watch(live)
                await once(live, 'live')
                live.close()
                return assert.strictEqual(live.roomid, roomid)
              })
            })
        })
        it('online', async function() {
          const live = new Live(12235923)
          watch(live)
          const [online] = await once(live, 'heartbeat')
          live.close()
          return assert.strictEqual(online, live.online)
        })
        it('closed', async function() {
          const live = new Live(12235923)
          watch(live)
          assert.isFalse(live.closed)
          await once(live, 'live')
          live.close()
          assert.isTrue(live.closed)
        })
      })
      context('functions', function() {
        it('close', async function() {
          const live = new Live(12235923)
          watch(live)
          await once(live, 'heartbeat')
          const close = await new Promise(resolve => {
            live.on('close', () => resolve('closed'))
            live.close()
          })
          return assert.strictEqual(close, 'closed')
        })
        it('getOnline', async function() {
          const live = new Live(12235923)
          watch(live)
          await once(live, 'live')
          const online = await live.getOnline()
          live.close()
          return assert.isAbove(online, 0)
        })
        if (name.includes('Keep')) {
          it('no error relay', async function() {
            const live = new Live(12235923) as KeepLiveWS | KeepLiveTCP
            watch(live)
            await once(live, 'live')
            await new Promise((resolve, reject) => {
              live.once('error', reject)
              live.connection.emit('error', new Error('This shold not be caught'))
              setTimeout(resolve, 1000)
            })
            live.close()
          })
        }
        if (name.includes('Keep')) {
          it('close and reopen', async function() {
            const live = new Live(12235923) as KeepLiveWS | KeepLiveTCP
            watch(live)
            await once(live, 'live')
            live.connection.close()
            await once(live, 'live')
            live.close()
          })
        } else {
          it('close on error', async function() {
            const live = new Live(12235923)
            watch(live)
            await once(live, 'heartbeat')
            const close = await new Promise(resolve => {
              live.on('close', () => resolve('closed'))
              live.on('error', () => { })
              live.emit('_error', Error())
            })
            return assert.strictEqual(close, 'closed')
          })
        }
      })
      context('options', function() {
        it('protover: 1', async function() {
          const live = new Live(12235923, { protover: 1 })
          watch(live)
          const [online] = await once(live, 'heartbeat')
          live.close()
          return assert.isAbove(online, 0)
        })
        it('protover: 3', async function() {
          const live = new Live(12235923, { protover: 3 })
          watch(live)
          const [online] = await once(live, 'heartbeat')
          live.close()
          return assert.isAbove(online, 0)
        })
        if (name.includes('WS')) {
          it('address', async function() {
            const L = Live as typeof LiveWS || KeepLiveWS
            const live = new L(12235923, { address: 'wss://broadcastlv.chat.bilibili.com/sub' })
            watch(live)
            const [online] = await once(live, 'heartbeat')
            live.close()
            return assert.isAbove(online, 0)
          })
        } else if (name.includes('TCP')) {
          it('host, port', async function() {
            const live = new Live(12235923, { host: 'broadcastlv.chat.bilibili.com', port: 2243 })
            watch(live)
            const [online] = await once(live, 'heartbeat')
            live.close()
            return assert.isAbove(online, 0)
          })
        } else {
          throw new Error('no options test')
        }
        it('key: token', async function() {
          const { key, host, address } = await getConf(12235923)
          const live = new Live(12235923, { key, host, address } as any)
          watch(live)
          const [online] = await once(live, 'heartbeat')
          live.close()
          return assert.isAbove(online, 0)
        })
      })
    })
  })
