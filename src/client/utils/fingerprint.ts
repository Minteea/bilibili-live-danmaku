/** 生成随机的base64图片数据 */
export function generateRandomPngBase64(): string {
  // 生成带过滤头的随机像素数据
  const pixelData = new Uint8Array(20 * (20 * 4 + 1));
  for (let y = 0, offset = 0; y < 20; y++) {
    pixelData[offset++] = 0; // 过滤类型
    for (let x = 0; x < 20; x++) {
      pixelData[offset++] = Math.floor(Math.random() * 256); // R
      pixelData[offset++] = Math.floor(Math.random() * 256); // G
      pixelData[offset++] = Math.floor(Math.random() * 256); // B
      pixelData[offset++] = 255; // A
    }
  }

  // 计算Adler32校验和
  const computeAdler32 = (data: Uint8Array): number => {
    let s1 = 1,
      s2 = 0;
    for (const byte of data) {
      s1 = (s1 + byte) % 65521;
      s2 = (s2 + s1) % 65521;
    }
    return (s2 << 16) | s1;
  };

  // 构造Deflate流
  const deflateStream = new Uint8Array([
    0x78,
    0x01, // Zlib头
    0x00, // BFINAL=0，BTYPE=00（非最后块）
    0x54,
    0x06, // LEN=1620
    0xab,
    0xf9, // NLEN=~1620
    ...pixelData,
    ...new Uint8Array([
      // Adler32
      (computeAdler32(pixelData) >> 24) & 0xff,
      (computeAdler32(pixelData) >> 16) & 0xff,
      (computeAdler32(pixelData) >> 8) & 0xff,
      computeAdler32(pixelData) & 0xff,
    ]),
  ]);

  // 计算CRC32
  const computeCRC32 = (data: Uint8Array): number => {
    let crc = 0xffffffff;
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      table[i] = c;
    }
    for (const byte of data) {
      crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }
    return crc ^ 0xffffffff;
  };

  // 创建PNG块
  const createChunk = (type: string, data: Uint8Array): Uint8Array => {
    const typeBytes = new TextEncoder().encode(type);
    const length = new Uint8Array(4);
    length[0] = (data.length >> 24) & 0xff;
    length[1] = (data.length >> 16) & 0xff;
    length[2] = (data.length >> 8) & 0xff;
    length[3] = data.length & 0xff;

    const chunkData = new Uint8Array([...typeBytes, ...data]);
    const crc = computeCRC32(chunkData);
    const crcBytes = new Uint8Array(4);
    crcBytes[0] = (crc >> 24) & 0xff;
    crcBytes[1] = (crc >> 16) & 0xff;
    crcBytes[2] = (crc >> 8) & 0xff;
    crcBytes[3] = crc & 0xff;

    return new Uint8Array([...length, ...chunkData, ...crcBytes]);
  };

  // 构建PNG结构
  const signature = new Uint8Array([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ]);
  const ihdrData = new Uint8Array([
    0x00,
    0x00,
    0x00,
    0x14, // 宽度20
    0x00,
    0x00,
    0x00,
    0x14, // 高度20
    0x08, // 位深度
    0x06, // 颜色类型（RGBA）
    0x00, // 压缩方法
    0x00, // 滤波方法
    0x00, // 隔行扫描
  ]);
  const ihdrChunk = createChunk("IHDR", ihdrData);
  const idatChunk = createChunk("IDAT", deflateStream);
  const iendChunk = createChunk("IEND", new Uint8Array(0));

  // 合并所有数据
  const pngData = new Uint8Array([
    ...signature,
    ...ihdrChunk,
    ...idatChunk,
    ...iendChunk,
  ]);

  // 转换为Base64
  const base64 = btoa(String.fromCharCode(...pngData));
  return `data:image/png;base64,${base64}`;
}

export interface FpInfoMap {
  userAgent: string;
  webdriver: boolean;
  language: string;
  colorDepth: number;
  deviceMemory: number;
  hardwareConcurrency: number;
  screenResolution: [number, number];
  availableScreenResolution: [number, number];
  timezoneOffset: number;
  timezone: string;
  sessionStorage: boolean;
  localStorage: boolean;
  indexedDb: boolean;
  addBehavior: boolean;
  openDatabase: boolean;
  cpuClass: string;
  platform: string;
  plugins: [string, string, [string, string][]][];
  canvas: [string, string];
  webgl: string[];
  webglVendorAndRenderer: string;
  hasLiedLanguages: boolean;
  hasLiedResolution: boolean;
  hasLiedOs: boolean;
  hasLiedBrowser: boolean;
  touchSupport: [number, boolean, boolean];
  fonts: string[];
  audio: string;
}

type FpItem<K extends keyof FpInfoMap> = { key: K; value: FpInfoMap[K] };

export type FpInfo = FpItem<keyof FpInfoMap>[];

export function fpGet<K extends keyof FpInfoMap>(fp: FpInfo, key: K) {
  return fp.find((item) => item.key == key)?.value as FpInfoMap[K];
}

/** 生成ExClimbWuzhi请求体 */
export function getExClimbWuzhiPayload(
  fp: FpInfo,
  info: {
    uuid: string;
    timestamp: string; // ms
    browser_resolution: string; // 1920x1080
    abtest: string;
  }
) {
  const timestamp = info.timestamp;

  const userAgent = fpGet(fp, "userAgent");
  const webdriver = Number(!!fpGet(fp, "webdriver"));
  const language = fpGet(fp, "language");
  const colorDepth = fpGet(fp, "colorDepth");
  const deviceMemory = fpGet(fp, "deviceMemory");
  const hardwareConcurrency = fpGet(fp, "hardwareConcurrency");
  const screenResolution = fpGet(fp, "screenResolution");
  const availableScreenResolution = fpGet(fp, "availableScreenResolution");
  const timezoneOffset = fpGet(fp, "timezoneOffset");
  const timezone = fpGet(fp, "timezone");
  const sessionStorage = Number(!!fpGet(fp, "sessionStorage"));
  const localStorage = Number(!!fpGet(fp, "localStorage"));
  const indexedDb = Number(!!fpGet(fp, "indexedDb"));
  const addBehavior = Number(!!fpGet(fp, "addBehavior"));
  const openDatabase = Number(!!fpGet(fp, "openDatabase"));
  const cpuClass = fpGet(fp, "cpuClass");
  const platform = fpGet(fp, "platform");
  const plugins = fpGet(fp, "plugins");
  const canvas = fpGet(fp, "canvas");
  const webgl = fpGet(fp, "webgl");
  const webglVendorAndRenderer = fpGet(fp, "webglVendorAndRenderer");
  const hasLiedLanguages = Number(!!fpGet(fp, "hasLiedLanguages"));
  const hasLiedResolution = Number(!!fpGet(fp, "hasLiedResolution"));
  const hasLiedOs = Number(!!fpGet(fp, "hasLiedOs"));
  const hasLiedBrowser = Number(!!fpGet(fp, "hasLiedBrowser"));
  const touchSupport = fpGet(fp, "touchSupport").map((n) => Number(!!n));
  const fonts = fpGet(fp, "fonts");
  const audio = fpGet(fp, "audio");

  const canvas_str = canvas[1].substring(canvas[1].length - 20);
  const webgl_str = webgl[0].substring(webgl[0].length - 50);
  const webgl_params = webgl.slice(1);

  return {
    "3064": 1, // ptype, mobile => 2, others => 1
    "5062": timestamp, // timestamp (ms)
    "03bf": "https%3A%2F%2Fwww.bilibili.com%2F", // url accessed
    "39c8": "333.1007.fp.risk", // spm_id
    "34f1": "", // target_url, default empty now
    d402: "", // screenx, default empty
    "654a": "", // screeny, default empty
    "6e7c": info.browser_resolution, // browser_resolution, window.innerWidth || document.body && document.body.clientWidth + "x" + window.innerHeight || document.body && document.body.clientHeight
    "3c43": {
      // 3c43 => msg
      "2673": 0, // hasLiedResolution, window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
      "5766": colorDepth, // colorDepth, window.screen.colorDepth
      "6527": 0, // addBehavior, !!window.HTMLElement.prototype.addBehavior, html5 api
      "7003": 1, // indexedDb, !!window.indexedDB, html5 api
      "807e": 1, // cookieEnabled, navigator.cookieEnabled
      b8ce: userAgent, // ua
      "641c": webdriver, // webdriver, navigator.webdriver, like Selenium
      "07a4": language, // language
      "1c57": deviceMemory, // deviceMemory in GB, navigator.deviceMemory
      "0bd0": hardwareConcurrency, // hardwareConcurrency, navigator.hardwareConcurrency
      "748e": screenResolution, // screenResolution
      d61f: availableScreenResolution, // availableScreenResolution
      fc9d: timezoneOffset, // timezoneOffset, (new Date).getTimezoneOffset()
      "6aa9": timezone, // timezone, (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
      "75b8": sessionStorage, // sessionStorage, window.sessionStorage, html5 api
      "3b21": localStorage, // localStorage, window.localStorage, html5 api
      "8a1c": openDatabase, // openDatabase, window.openDatabase, html5 api
      d52f: cpuClass, // cpuClass, navigator.cpuClass
      adca: platform, // platform, navigator.platform
      "80c9": plugins, // plugins
      "13ab": canvas_str, // canvas fingerprint
      bfe9: webgl_str, // webgl_str
      a3c1: webgl_params, // webgl_params, cab be set to [] if webgl is not supported
      "6bc5": webglVendorAndRenderer, // webglVendorAndRenderer
      ed31: hasLiedLanguages, // hasLiedLanguages
      "72bd": hasLiedOs, // hasLiedOs
      "097b": hasLiedBrowser, // hasLiedBrowser
      "52cd": touchSupport, // touch support
      a658: fonts, // font details. see https://github.com/fingerprintjs/fingerprintjs for implementation details
      d02f: audio, // audio fingerprint. see https://github.com/fingerprintjs/fingerprintjs for implementation details
    },
    "54ef": info.abtest, // abtest info, embedded in html
    "8b94": "https%3A%2F%2Fwww.bilibili.com%2F", // refer_url, document.referrer ? encodeURIComponent(document.referrer).substr(0, 1e3) : ""
    df35: info.uuid, // _uuid, set from cookie, generated by client side(algorithm remains unknown)
    "07a4": "zh-CN", // language
    "5f45": null, // laboratory, set from cookie, null if empty, source remains unknown
    db46: 0, // is_selfdef, default 0}
  };
}

/** 生成虚拟指纹信息 */
export function generateFakeFpInfo(info: {
  canvas: string;
  webgl: string;
  userAgent: string;
  platform: string;
}): FpInfo {
  const { canvas, webgl, userAgent } = info;
  return [
    {
      key: "userAgent",
      value: userAgent,
    },
    {
      key: "webdriver",
      value: false,
    },
    {
      key: "language",
      value: "zh-CN",
    },
    {
      key: "colorDepth",
      value: 24,
    },
    {
      key: "deviceMemory",
      value: 8,
    },
    {
      key: "hardwareConcurrency",
      value: 12,
    },
    {
      key: "screenResolution",
      value: [1920, 1080],
    },
    {
      key: "availableScreenResolution",
      value: [1920, 1032],
    },
    {
      key: "timezoneOffset",
      value: new Date().getTimezoneOffset(),
    },
    {
      key: "timezone",
      value: new Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    {
      key: "sessionStorage",
      value: true,
    },
    {
      key: "localStorage",
      value: true,
    },
    {
      key: "indexedDb",
      value: true,
    },
    {
      key: "addBehavior",
      value: false,
    },
    {
      key: "openDatabase",
      value: false,
    },
    {
      key: "cpuClass",
      value: "not available",
    },
    {
      key: "platform",
      value: "Win32",
    },
    {
      key: "plugins",
      value: [
        [
          "PDF Viewer",
          "Portable Document Format",
          [
            ["application/pdf", "pdf"],
            ["text/pdf", "pdf"],
          ],
        ],
        [
          "Chrome PDF Viewer",
          "Portable Document Format",
          [
            ["application/pdf", "pdf"],
            ["text/pdf", "pdf"],
          ],
        ],
        [
          "Chromium PDF Viewer",
          "Portable Document Format",
          [
            ["application/pdf", "pdf"],
            ["text/pdf", "pdf"],
          ],
        ],
        [
          "Microsoft Edge PDF Viewer",
          "Portable Document Format",
          [
            ["application/pdf", "pdf"],
            ["text/pdf", "pdf"],
          ],
        ],
        [
          "WebKit built-in PDF",
          "Portable Document Format",
          [
            ["application/pdf", "pdf"],
            ["text/pdf", "pdf"],
          ],
        ],
      ],
    },
    {
      key: "canvas",
      value: ["canvas winding:yes", `canvas fp:${canvas}`],
    },
    {
      key: "webgl",
      value: [
        webgl,
        "extensions:ANGLE_instanced_arrays;EXT_blend_minmax;EXT_clip_control;EXT_color_buffer_half_float;EXT_depth_clamp;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_polygon_offset_clamp;EXT_shader_texture_lod;EXT_texture_compression_bptc;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_texture_mirror_clamp_to_edge;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_blend_func_extended;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw;WEBGL_polygon_mode",
        "webgl aliased line width range:[1, 1]",
        "webgl aliased point size range:[1, 1024]",
        "webgl alpha bits:8",
        "webgl antialiasing:yes",
        "webgl blue bits:8",
        "webgl depth bits:24",
        "webgl green bits:8",
        "webgl max anisotropy:16",
        "webgl max combined texture image units:32",
        "webgl max cube map texture size:16384",
        "webgl max fragment uniform vectors:1024",
        "webgl max render buffer size:16384",
        "webgl max texture image units:16",
        "webgl max texture size:16384",
        "webgl max varying vectors:30",
        "webgl max vertex attribs:16",
        "webgl max vertex texture image units:16",
        "webgl max vertex uniform vectors:4095",
        "webgl max viewport dims:[32767, 32767]",
        "webgl red bits:8",
        "webgl renderer:WebKit WebGL",
        "webgl shading language version:WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
        "webgl stencil bits:0",
        "webgl vendor:WebKit",
        "webgl version:WebGL 1.0 (OpenGL ES 2.0 Chromium)",
        "webgl unmasked vendor:Google Inc. (NVIDIA)",
        "webgl unmasked renderer:ANGLE (NVIDIA, NVIDIA GeForce RTX 2070 Super with Max-Q Design (0x00001ED1) Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "webgl vertex shader high float precision:23",
        "webgl vertex shader high float precision rangeMin:127",
        "webgl vertex shader high float precision rangeMax:127",
        "webgl vertex shader medium float precision:23",
        "webgl vertex shader medium float precision rangeMin:127",
        "webgl vertex shader medium float precision rangeMax:127",
        "webgl vertex shader low float precision:23",
        "webgl vertex shader low float precision rangeMin:127",
        "webgl vertex shader low float precision rangeMax:127",
        "webgl fragment shader high float precision:23",
        "webgl fragment shader high float precision rangeMin:127",
        "webgl fragment shader high float precision rangeMax:127",
        "webgl fragment shader medium float precision:23",
        "webgl fragment shader medium float precision rangeMin:127",
        "webgl fragment shader medium float precision rangeMax:127",
        "webgl fragment shader low float precision:23",
        "webgl fragment shader low float precision rangeMin:127",
        "webgl fragment shader low float precision rangeMax:127",
        "webgl vertex shader high int precision:0",
        "webgl vertex shader high int precision rangeMin:31",
        "webgl vertex shader high int precision rangeMax:30",
        "webgl vertex shader medium int precision:0",
        "webgl vertex shader medium int precision rangeMin:31",
        "webgl vertex shader medium int precision rangeMax:30",
        "webgl vertex shader low int precision:0",
        "webgl vertex shader low int precision rangeMin:31",
        "webgl vertex shader low int precision rangeMax:30",
        "webgl fragment shader high int precision:0",
        "webgl fragment shader high int precision rangeMin:31",
        "webgl fragment shader high int precision rangeMax:30",
        "webgl fragment shader medium int precision:0",
        "webgl fragment shader medium int precision rangeMin:31",
        "webgl fragment shader medium int precision rangeMax:30",
        "webgl fragment shader low int precision:0",
        "webgl fragment shader low int precision rangeMin:31",
        "webgl fragment shader low int precision rangeMax:30",
      ],
    },
    {
      key: "webglVendorAndRenderer",
      value:
        "Google Inc. (NVIDIA)~ANGLE (NVIDIA, NVIDIA GeForce RTX 2070 Super with Max-Q Design (0x00001ED1) Direct3D11 vs_5_0 ps_5_0, D3D11)",
    },
    {
      key: "hasLiedLanguages",
      value: false,
    },
    {
      key: "hasLiedResolution",
      value: false,
    },
    {
      key: "hasLiedOs",
      value: false,
    },
    {
      key: "hasLiedBrowser",
      value: false,
    },
    {
      key: "touchSupport",
      value: [0, false, false],
    },
    {
      key: "fonts",
      value: [
        "Arial",
        "Arial Black",
        "Arial Narrow",
        "Arial Unicode MS",
        "Book Antiqua",
        "Bookman Old Style",
        "Calibri",
        "Cambria",
        "Cambria Math",
        "Century",
        "Century Gothic",
        "Century Schoolbook",
        "Comic Sans MS",
        "Consolas",
        "Courier",
        "Courier New",
        "Georgia",
        "Helvetica",
        "Impact",
        "Lucida Bright",
        "Lucida Calligraphy",
        "Lucida Console",
        "Lucida Fax",
        "Lucida Handwriting",
        "Lucida Sans",
        "Lucida Sans Typewriter",
        "Lucida Sans Unicode",
        "Microsoft Sans Serif",
        "Monotype Corsiva",
        "MS Gothic",
        "MS PGothic",
        "MS Reference Sans Serif",
        "MS Sans Serif",
        "MS Serif",
        "Palatino Linotype",
        "Segoe Print",
        "Segoe Script",
        "Segoe UI",
        "Segoe UI Light",
        "Segoe UI Semibold",
        "Segoe UI Symbol",
        "Tahoma",
        "Times",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana",
        "Wingdings",
        "Wingdings 2",
        "Wingdings 3",
      ],
    },
    {
      key: "audio",
      value: "124.04347527516074",
    },
  ];
}
