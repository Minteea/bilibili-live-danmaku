export interface ResponseDataRoot<T> {
  code: number;
  message: string;
  ttl: number;
  data: T;
}

/** 接口返回的直播间信息
 * https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom?room_id={id} */
export interface DataXliveGetInfoByRoom {
  room_info: {
    /** 用户uid */
    uid: number;
    /** 房间id */
    room_id: number;
    /** 短id */
    short_id: number;
    /** 直播间标题 */
    title: string;
    /** 直播间封面 */
    cover: string;
    /** 直播间标签 */
    tags: string;
    /** 直播间背景 */
    background: string;
    /** 直播间简介 */
    description: string;
    /** 直播状态 */
    live_status: number;
    /** 直播开始时间(s) */
    live_start_time: number;
    /** 是否被封禁 */
    lock_status: number;
    /** 封禁时间 */
    lock_time: number;
    /** 是否被隐藏 */
    hidden_status: number;
    /** 隐藏时间 */
    hidden_time: number;
    /** 分区id */
    area_id: number;
    /** 分区名 */
    area_name: string;
    /** 一级分区id */
    parent_area_id: number;
    /** 一级分区名 */
    parent_area_name: string;
    /** session */
    up_session: string;
    /** 直播场次id */
    live_id: number;
    /** 直播场次id */
    live_id_str: string;
    /** 观看数 */
    online: number;
  };
  /** 主播信息 */
  anchor_info: {
    /** 基本信息 */
    base_info: {
      /** 用户名 */
      uname: string;
      /** 头像 */
      face: string;
      /** 性别 */
      gender: string;
      /** 官方信息 */
      official_info: {
        role: number;
        title: string;
        desc: string;
      };
    };
    /** 直播信息 */
    live_info: {
      /** 主播等级 */
      level: number;
      /** 等级颜色 */
      level_color: number;
      /** 经验值 */
      score: number;
      /** 下一级所需经验值 */
      upgrade_score: number;
      /** 当前等级 */
      current: [number, number];
      /** 下一等级 */
      next: [number, number];
      /** 直播间排名 */
      rank: string;
    };
    /** 直播间粉丝牌信息 */
    medal_info: {
      /** 粉丝牌名称 */
      medal_name: string;
      /** 粉丝牌id */
      medal_id: number;
      /** 粉丝团成员数 */
      fansclub: number;
    };
  };
  /** 公告信息 */
  news_info: {
    /** uid */
    uid: number;
    /** 创建时间 */
    ctime: string;
    /** 公告内容 */
    content: string;
  };
  /** 分区排名信息 */
  area_rank_info: {
    areaRank: {
      index: number;
      rank: string;
    };
    liveRank: {
      rank: string;
    };
  };
  /** sc信息 */
  super_chat_info: {
    status: number;
    ranked_mark: number;
    message_list: [];
  };
  /** 在线榜单信息 */
  online_gold_rank_info_v2: {
    list: {
      uid: number;
      face: string;
      uname: string;
      score: string;
      rank: number;
      guard_level: number;
    }[];
  };
  watched_show: {
    num: number;
    text_small: string;
    text_large: string;
  };
  show_reserve_status: false;
  /** 点赞信息 */
  like_info_v3: {
    /** 总点赞数 */
    total_likes: number;
  };
  /** 大航海信息 */
  guard_info: {
    count: number;
    anchor_guard_achieve_level: number;
  };
  room_rank_info: {
    user_rank_entry: {
      /** 贡献榜排行 */
      user_contribution_rank_entry: {
        item: {
          uid: number;
          name: string;
          face: string;
          rank: number;
          score: number;
          medal_info: null;
          guard_level: number;
          wealth_level: number;
        }[];
        /** 贡献榜总数 */
        count: number;
        /** 最大显示数量 */
        show_max: number;
      };
    };
  };
}

/** 房间页初始化信息 */
export interface DataLiveRoomInit {
  /** 直播间真实id */
  room_id: number;

  /** 直播间id（短号） */
  short_id: number;

  /** 主播用户mid */
  uid: number;

  /** 是否p2p */
  need_p2p: number;

  /** 是否隐藏 */
  is_hidden: boolean;

  /** 是否锁定 */
  is_locked: boolean;

  /** 是否竖屏 */
  is_portrait: boolean;

  /** 直播状态
   * > 0：未开播
   * > 1：直播中
   * > 2：轮播中
   */
  live_status: number;

  /** 隐藏时间戳 */
  hidden_till: number;

  /** 锁定时间戳 */
  lock_till: number;

  /** 是否加密 */
  encrypted: boolean;

  /** 加密房间是否通过密码验证
   * > `encrypted`=true时才有意义
   */
  pwd_verified: boolean;

  /** 开播时间
   * > 未开播时为 `-62170012800`
   */
  live_time: number;

  room_shield: number;

  /** 是否为特殊直播间
   * > 0：普通直播间
   * > 1：付费直播间
   */
  is_sp: number;

  /** 特殊直播间标志
   * > 0：普通直播间
   * > 1：付费直播间
   * > 2：拜年祭直播间
   */
  special_type: number;
}

export interface DataXliveGetDanmuInfo {
  business_id: number;
  group: string;
  host_list: {
    host: string;
    port: number;
    wss_port: number;
    ws_port: number;
  }[];
  max_delay: number;
  refresh_rate: number;
  refresh_row_factor: number;
  token: string;
}

export interface DataXliveGetRoomBaseInfo {
  by_uids: Record<string, unknown>;
  by_room_ids: Record<
    string,
    {
      /** 直播间长ID */
      room_id: number;
      /** 主播用户mid */
      uid: number;
      /** 直播间分区ID */
      area_id: number;
      /** 直播状态 */
      live_status: number;
      /** 直播间网页url */
      live_url: string;
      /** 直播间父分区ID */
      parent_area_id: number;
      /** 直播间标题 */
      title: string;
      /** 直播间父分区名称 */
      parent_area_name: string;
      /** 直播间分区名称 */
      area_name: string;
      /** 开播时间 */
      live_time: string;
      /** 直播间简介 */
      description: string;
      /** 直播间标签 */
      tags: string;
      /** 关注数 */
      attention: number;
      /** 在线人数 */
      online: number;
      /** 直播间短ID */
      short_id: number;
      /** 主播用户名 */
      uname: string;
      /** 直播间封面url */
      cover: string;
      /** 直播间背景url */
      background: string;
      join_slide: number;
      live_id: number;
      live_id_str: string;
      lock_status: number;
      hidden_status: number;
      is_encrypted: boolean;
    }
  >;
}

/** 信息流认证秘钥 */
export interface DataXliveGetDanmuInfo {
  group: string;
  business_id: number;
  refresh_row_factor: number;
  refresh_rate: number;
  max_delay: number;
  /** 认证秘钥 */
  token: string;
  /** 信息流服务器节点列表 */
  host_list: {
    /** 服务器域名 */
    host: string;
    /** TCP 端口 */
    port: number;
    /** WSS 端口	 */
    wss_port: number;
    /** WS 端口 */
    ws_port: number;
  }[];
}

/** 直播间主播信息 */
export interface DataLiveUserGetAnchorInRoom {
  info: {
    uid: number;
    uname: "哔哩哔哩直播";
    face: string;
    rank: string;
    platform_user_level: number;
    mobile_verify: number;
    identification: number;
    official_verify: {
      type: number;
      desc: string;
      role: number;
    };
    vip_type: number;
    gender: number;
  };
  level: {
    uid: number;
    cost: number;
    rcost: number;
    user_score: string;
    vip: number;
    vip_time: string;
    svip: number;
    svip_time: string;
    update_time: string;
    master_level: {
      level: number;
      color: number;
      current: [number, number];
      next: [number, number];
      anchor_score: number;
      upgrade_score: number;
      master_level_color: number;
      sort: string;
    };
    user_level: number;
    color: number;
    anchor_score: number;
  };
  san: number;
}

export interface DataApiGenWebTicket {
  ticket: string;
  created_at: number;
  ttl: number;
  context: {};
  nav: {
    img: string;
    sub: string;
  };
}
