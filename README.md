# bilibili-live-danmaku

[![npm](https://img.shields.io/npm/v/bilibili-live-danmaku.svg)](https://www.npmjs.com/package/bilibili-live-danmaku)

Bilibili 直播 WebSocket API，支持浏览器和服务端 JS 运行环境

> 本项目基于[github:simon300000/bilibili-live-ws](https://github.com/simon300000/bilibili-live-ws)的项目进行改进，使用符合现有 Web 标准的 API 和 ES 规范进行代码重构，满足不同 JS 环境下的可移植性

## API

```javascript
import { LiveWS, KeepLiveWS } from "bilibili-live-danmaku";
const live = new LiveWS(roomid);
// 或
const live = new KeepLiveWS(roomid);
```

举个栗子:

```javascript
const live = new LiveWS(14275133);

live.addEventListener("open", () => console.log("Connection is established"));
// Connection is established
live.addEventListener("CONNECT_SUCCESS", () => {
  live.addEventListener("HEARTBEAT_REPLY", ({ data }) => console.log(data));
  // 74185
});
```

## Class: LiveWS / KeepLiveWS

### new LiveWS()

```typescript
  new LiveWS (roomid [, { address, protover, key, authBody, uid, buvid }])
```

- `roomid` 房间号

  比如 https://live.bilibili.com/14327465 中的 `14327465`

- `address` 可选, WebSocket 连接的地址

  默认 `'wss://broadcastlv.chat.bilibili.com/sub'`

- `protover` 可选 (1, 2, 3)

  默认 `2`

  - 1 (见 [#17](https://github.com/simon300000/bilibili-live-ws/issues/17))
  - 2 (zlib.inflate)
  - 3 (brotliDecompress)

- `uid` 可选, WS 握手的 uid [#397](https://github.com/simon300000/bilibili-live-ws/issues/397)

- `key` 可选, WS 握手的 Token [#397](https://github.com/simon300000/bilibili-live-ws/issues/397)

- `buvid` 可选, WS 握手的 Token [#397](https://github.com/simon300000/bilibili-live-ws/issues/397)

- `authBody` 可选, 可以和 <https://open-live.bilibili.com/document/> 配合使用, 会覆盖掉 `protover` `roomid` `key` `uid` `buvid`. 如果是 `object` 会按照握手包编码，如果是 `string`/`Uint8Array` 会直接发送

#### live.addEventListener('open')

WebSocket 连接上了

#### live.addEventListener('CONNECT_SUCCESS')

成功登入房间

#### live.addEventListener('HEARTBEAT_REPLY')

收到服务器心跳包，会在 30 秒之后自动发送心跳包。

#### live.addEventListener('MESSAGE', ({data}) => ...)

- `data` 收到信息/弹幕/广播等

  data 的例子: (我 simon3000 送了一个辣条)

  ```javascript
  {
    cmd: 'SEND_GIFT',
    data: {
      giftName: '辣条',
      num: 1,
      uname: 'simon3000',
      face: 'http://i1.hdslb.com/bfs/face/c26b9f670b10599ad105e2a7fea4b5f21c0f0bcf.jpg',
      guard_level: 0,
      rcost: 2318827,
      uid: 3499295,
      top_list: [],
      timestamp: 1555690631,
      giftId: 1,
      giftType: 0,
      action: '喂食',
      super: 0,
      super_gift_num: 0,
      price: 100,
      rnd: '1555690616',
      newMedal: 0,
      newTitle: 0,
      medal: [],
      title: '',
      beatId: '0',
      biz_source: 'live',
      metadata: '',
      remain: 6,
      gold: 0,
      silver: 0,
      eventScore: 0,
      eventNum: 0,
      smalltv_msg: [],
      specialGift: null,
      notice_msg: [],
      capsule: null,
      addFollow: 0,
      effect_block: 1,
      coin_type: 'silver',
      total_coin: 100,
      effect: 0,
      tag_image: '',
      user_count: 0
    }
  }
  ```

#### live.addEventListener(cmd, ({data}) => ...)

用法如上，只不过只会收到特定 cmd 的 Event。

比如 `live.on('DANMU_MSG')` 只会收到弹幕 Event，一个弹幕 Event 的 Data 例子如下: (我 simon3000 发了个`233`)

```javascript
{
  cmd: 'DANMU_MSG',
  info: [
    [0, 1, 25, 16777215, 1555692037, 1555690616, 0, 'c5c630b1', 0, 0, 0],
    '233',
    [3499295, 'simon3000', 0, 0, 0, 10000, 1, ''],
    [5, '財布', '神楽めあOfficial', 12235923, 5805790, ''],
    [11, 0, 6406234, '>50000'],
    ['title-58-1', 'title-58-1'],
    0,
    0,
    null,
    { ts: 1555692037, ct: '2277D56A' }
  ]
}
```

#### live.addEventListener('close')

连接关闭事件

#### live.addEventListener('error', (e) => ...)

连接 error 事件，连接同时也会关闭

#### live.heartbeat()

无视 30 秒时间，直接发送一个心跳包。

如果连接正常，会收到来自服务器的心跳包，也就是 `live.on('heartbeat')`，可以用于更新人气值。

#### live.close()

关闭 WebSocket 连接。

#### live.on('message')

WebSocket 收到的 MessageEvent 对象，包含原始 Blob 数据（不推荐直接使用）

#### live.send(buffer)

使用 WebSocket 发送信息

### getLiveConfig(roomid)

选一个 cdn，Resolve host, address 和 key, 可以直接放进(Keep)LiveWS 设置

```typescript
import { getLiveConfig } from "bilibili-live-danmaku";

getLiveConfig(roomid);
// Return
Promise<{
  key: string;
  host: string;
  address: string;
}>;
```

### getRoomid(short)

通过短房间号获取长房间号

```typescript
import { getRoomid } from "bilibili-live-danmaku";

getRoomid(255);
// Return Promise<number>: 48743
```
