import http from "../utils/http";
import { hosttUrl } from "./base";

/**
 * 获得Discord token
 */
function getDiscordToken(url,param) {
  return http("post", url, param);
}

export { getDiscordToken };
