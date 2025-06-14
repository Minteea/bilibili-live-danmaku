import { DataXliveGetDanmuInfo } from "../client/types";

export function parseLiveConfig(info: DataXliveGetDanmuInfo) {
  const {
    token: key,
    host_list: [{ host }],
  } = info;
  const address = `wss://${host}/sub`;
  return { key, host, address };
}
