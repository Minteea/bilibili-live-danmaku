import { bilibili } from "./proto";
import { MessageData } from "./types";

export const protoDecoderMap: {
  [K in MessageData["cmd"]]?: (data: any) => any;
} = {
  INTERACT_WORD_V2: (msg: MessageData.INTERACT_WORD_V2) => {
    msg.decoded = bilibili.live.xuserreward.v1.InteractWord.decode(
      base64ToUint8Array(msg.data.pb)
    );
    return msg;
  },
  ONLINE_RANK_V3: (msg: MessageData.ONLINE_RANK_V3) => {
    msg.decoded = bilibili.live.rankdb.v1.GoldRankBroadcast.decode(
      base64ToUint8Array(msg.data.pb)
    );
    return msg;
  },
};

function base64ToUint8Array(base64String: string) {
  let padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  let base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");

  let rawData = atob(base64);
  let outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
