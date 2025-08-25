export namespace MessageData {
  declare enum DanmakuMode {
    left = 1,
    bottom = 4,
    top = 5,
    right = 6,
  }
  interface Base {
    cmd: string;
    /** 消息id */
    msg_id?: string;
    /** 发送时间 */
    send_time?: number;
  }
  export interface DANMU_MSG extends Base {
    cmd: "DANMU_MSG";
    info: {
      0: {
        /** 弹幕模式 */
        1: DanmakuMode;
        /** 弹幕字号 */
        2: number;
        /** 弹幕颜色 */
        3: number;
        /** 时间戳 */
        4: number;
        /** 是否为图片信息 */
        12: number;
        /** 图片信息 */
        13: {
          /** 表情图片id */
          emoticon_unique: string;
          /** 表情图片url */
          url: string;
          /** 表情图片宽度 */
          width: number;
          /** 表情图片高度 */
          height: number;
        };
        /** 附加信息 */
        15: {
          extra: string;
          user: {
            base: {
              /** 用户头像 */
              face: string;
              /** 神秘用户 */
              is_mystery: boolean;
              /** 用户名 */
              name: string;
              name_color: number;
              name_color_str: string;
              official_info: {
                desc: string;
                role: number;
                title: string;
                type: number;
              };
              origin_info: {
                face: string;
                name: string;
              };
              risk_ctrl_info: null;
            };
            guard: null;
            guard_leader: {
              is_guard_leader: false;
            };
            medal: {
              color: number;
              color_border: number;
              color_end: number;
              color_start: number;
              guard_icon: string;
              guard_level: number;
              honor_icon: string;
              id: number;
              is_light: number;
              level: number;
              name: string;
              ruid: number;
              score: number;
              typ: number;
              user_receive_count: number;
              v2_medal_color_border: string;
              v2_medal_color_end: string;
              v2_medal_color_level: string;
              v2_medal_color_start: string;
              v2_medal_color_text: string;
            };
            title: {
              old_title_css_id: string;
              title_css_id: string;
            };
            uhead_frame: null;
            uid: number;
            wealth: null;
          };
        };
        /** 活动信息 */
        16: {
          /** 弹幕不在聊天栏显示 */
          not_show: number;
        };
      };
      /** 弹幕内容 */
      1: string;
      2: {
        /** 用户uid */
        0: number;
        /** 用户名 */
        1: string;
        /** 用户是否为房管 */
        2: number;
      };
      /** 粉丝勋章信息 */
      3: {
        /** 勋章等级 */
        0: number;
        /** 勋章名称 */
        1: string;
        /** 勋章id */
        12: number;
        /** 大航海级别 */
        10: number;
      };
      /** 大航海级别 */
      7: number;
    };
  }
  export interface INTERACT_WORD extends Base {
    cmd: "INTERACT_WORD";
    data: {
      /** 用户名 */
      uname: string;
      /** 用户id */
      uid: number;
      /** 互动类型 */
      msg_type: number;
      /** 触发时间*1000000 */
      trigger_time: number;
      /** 粉丝勋章 */
      fans_medal: {
        /** 勋章等级 */
        medal_level: number;
        /** 勋章名称 */
        medal_name: string;
        /** 勋章id */
        target_id: number;
        /** 大航海级别 */
        guard_level: number;
      };
    };
  }

  export interface LIKE_INFO_V3_CLICK extends Base {
    cmd: "LIKE_INFO_V3_CLICK";
    data: {
      contribution_info: { grade: number };
      dmscore: number;
      fans_medal: {
        anchor_roomid: number;
        guard_level: number;
        icon_id: number;
        is_lighted: number;
        medal_color: number;
        medal_color_border: number;
        medal_color_end: number;
        medal_color_start: number;
        medal_level: number;
        medal_name: string;
        score: number;
        special: string;
        target_id: number;
      };
      group_medal: null;
      identities: [number, number];
      is_mystery: boolean;
      like_icon: string;
      like_text: string;
      msg_type: number;
      show_area: number;
      uid: number;
      uinfo: {
        base: {
          face: string;
          is_mystery: boolean;
          name: string;
          name_color: number;
          official_info: {
            desc: string;
            role: number;
            title: string;
            type: number;
          };
          origin_info: {
            face: string;
            name: string;
          };
          risk_ctrl_info: null;
        };
        guard: { expired_str: string; level: number };
        medal: {
          color: number;
          color_border: number;
          color_end: number;
          color_start: number;
          guard_icon: string;
          guard_level: number;
          honor_icon: string;
          id: number;
          is_light: number;
          level: number;
          name: string;
          ruid: number;
          score: number;
          typ: number;
        };
        title: null;
        uid: number;
        wealth: null;
      };
      uname: string;
      uname_color: string;
    };
  }
  export interface SEND_GIFT extends Base {
    cmd: "SEND_GIFT";
    data: {
      /** 用户名 */
      uname: string;
      /** 用户id */
      uid: number;
      /** 用户头像 */
      face: string;
      /** 发送时间(s) */
      timestamp: number;
      /** 粉丝勋章 */
      fans_medal: {
        /** 勋章等级 */
        medal_level: number;
        /** 勋章名称 */
        medal_name: string;
        /** 勋章id */
        target_id: number;
        /** 大航海级别 */
        guard_level: number;
      };
      /** 大航海级别 */
      guard_level: number;
      /** 礼物名称 */
      giftName: string;
      /** 礼物id */
      giftId: number;
      /** 礼物总数 */
      num: number;
      total_coin: number;
      /** 货币类型 */
      coin_type: string;
      /** 赠送礼物的动作描述 */
      action: string;
      combo_id: string;
      batch_combo_id: string;
    };
  }
  /** @deprecated */
  export interface GUARD_BUY extends Base {
    cmd: "GUARD_BUY";
    data: {
      /** 用户名 */
      username: string;
      /** 用户id */
      uid: number;
      /** 发送时间(s) */
      start_time: number;
      /** 大航海级别 */
      guard_level: number;
      /** 礼物名称 */
      gift_name: string;
      /** 礼物id */
      gift_id: number;
      /** 礼物总数 */
      num: number;
      /** 礼物价值 */
      price: number;
    };
  }
  export interface USER_TOAST_MSG extends Base {
    cmd: "USER_TOAST_MSG";
    data: {
      anchor_show: boolean;
      color: string;
      dmscore: number;
      effect_id: number;
      end_time: number;
      face_effect_id: number;
      /** 礼物id */
      gift_id: number;
      /** 大航海级别 */
      guard_level: number;
      is_show: number;
      /** 礼物总数 */
      num: number;
      op_type: number;
      payflow_id: string;
      /** 礼物价值 */
      price: number;
      /** 开通名称 */
      role_name: string;
      room_effect_id: number;
      /** 发送时间(s) */
      start_time: number;
      svga_block: number;
      target_guard_count: number;
      toast_msg: string;
      /** 用户id */
      uid: number;
      /** 单位 */
      unit: string;
      user_show: boolean;
      /** 用户名 */
      username: string;
    };
  }
  export interface SUPER_CHAT_MESSAGE extends Base {
    cmd: "SUPER_CHAT_MESSAGE";
    data: {
      /** sc消息id */
      id: string;
      /** 用户id */
      uid: number;
      /** 用户信息 */
      user_info: {
        /** 用户名 */
        uname: string;
        /** 用户头像 */
        face: string;
        /** 大航海级别 */
        guard_level: number;
      };
      /** 粉丝勋章 */
      medal_info: {
        /** 勋章等级 */
        medal_level: number;
        /** 勋章名称 */
        medal_name: string;
        /** 勋章id */
        target_id: number;
        /** 大航海级别 */
        guard_level: number;
      };
      /** 发送时间(s) */
      ts: number;
      /** 礼物信息 */
      gift: {
        /** 礼物名称 */
        gift_name: string;
        /** 礼物id */
        gift_id: number;
        /** 礼物总数 */
        num: number;
      };
      /** 礼物价值 */
      price: number;
      /** 消息 */
      message: string;
      /** 颜色 */
      background_bottom_color: string;
      /** 消息 */
      time: number;
    };
  }
  export interface WATCHED_CHANGE extends Base {
    cmd: "WATCHED_CHANGE";
    data: {
      num: number;
    };
  }
  export interface LIKE_INFO_V3_UPDATE extends Base {
    cmd: "LIKE_INFO_V3_UPDATE";
    data: {
      click_count: number;
    };
  }
  export interface ONLINE_RANK_COUNT extends Base {
    cmd: "ONLINE_RANK_COUNT";
    data: {
      count?: number;
      online_count?: number;
    };
  }
  export interface ROOM_BLOCK_MSG extends Base {
    cmd: "ROOM_BLOCK_MSG";
    data: {
      /** 用户名 */
      uname: string;
      /** 用户id */
      uid: number;
      /** 执行操作的用户类型 */
      operator: number;
    };
  }
  export interface LIVE extends Base {
    cmd: "LIVE";
    /** 直播时间 */
    live_time: number;
    /** 直播id */
    live_key: string;
  }
  export interface CUT_OFF extends Base {
    cmd: "CUT_OFF";
    /** 切断消息 */
    msg: string;
  }
  export interface PREPARING extends Base {
    cmd: "PREPARING";
    /** 是否为轮播 */
    round?: number;
  }
  export interface ROOM_CHANGE extends Base {
    cmd: "ROOM_CHANGE";
    data: {
      title: string;
      parent_area_name: string;
      area_name: string;
    };
  }
  export interface ANCHOR_LOT_START extends Base {
    cmd: "ANCHOR_LOT_START";
    data: {
      /** 图标 */
      asset_icon: string;
      /** webp图标 */
      asset_icon_webp: string;
      /** 奖品图标 */
      award_image: string;
      /** 奖品名称 */
      award_name: string;
      /** 奖品数量 */
      award_num: number;
      /** 奖品价值描述 */
      award_price_text: string;
      /** 奖品类型(1=礼物) */
      award_type: number;
      /** 当前时间 */
      current_time: number;
      /** 参与抽奖需发送的弹幕 */
      danmu: string;
      /** 需发送弹幕类型 */
      danmu_type: number;
      /** 抽奖id */
      id: number;
      /** 需投喂礼物id */
      gift_id: number;
      /** 需投喂礼物名称 */
      gift_name: string;
      /** 需投喂礼物数量 */
      gift_num: number;
      /** 需投喂礼物价值 */
      gift_price: number;
      /** 条件描述 */
      require_text: string;
      /** 条件类型(2=粉丝勋章等级) */
      require_type: number;
      /** 条件值 */
      require_value: number;
      /** 房间id */
      room_id: number;
      /** 持续时间(秒) */
      time: number;
    };
  }

  export type All =
    | DANMU_MSG
    | INTERACT_WORD
    | LIKE_INFO_V3_CLICK
    | SEND_GIFT
    | USER_TOAST_MSG
    | SUPER_CHAT_MESSAGE
    | WATCHED_CHANGE
    | LIKE_INFO_V3_UPDATE
    | ONLINE_RANK_COUNT
    | ROOM_BLOCK_MSG
    | LIVE
    | CUT_OFF
    | PREPARING
    | ROOM_CHANGE
    | ANCHOR_LOT_START;
}

export type MessageData = MessageData.All;
