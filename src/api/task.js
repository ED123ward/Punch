import http from "../utils/http";
import { hosttUrl } from "./base";

/**
 * 获得Twitter token
 */
function getTwitterToken(url,param) {
  return http("post", url, param);
}

export { getTwitterToken };
