export namespace ResponseData {
  /** 接口返回的直播间信息
   * https://api.live.bilibili.com/xlive/web-room/v1/index/getInfoByRoom?room_id={id} */
  export interface GetInfoByRoom {
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

  export interface GetDanmuInfo {
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

  export interface Wrap<T> {
    code: number;
    message: string;
    ttl: number;
    data: T;
  }
}
export namespace ResponseCookie {
  export interface GetInfoByRoom {}
}
