import http from '../utils/http';
import { hosttUrl } from './base';

/**
 * 登录
 */
function loginActive(param){
  return  http("post",hosttUrl+'/web/login',param);
}

/**
 * 获得币种列表
 */
function getCurrencyList(param){
  return  http("get",hosttUrl+'/web/exchange/currency/list',param);
}

/**
 * 获得相应币种
 */
function getCurrencyBalance(param){
  return  http("get",hosttUrl+`/web/account/${param.currency}/balance`);
}

/**
 * 获得相应币种
 */
function getCurrencyConfig(param){
  return  http("get",hosttUrl+`/web/exchange/config`);
}

/**
 * 获得提现首页状态
 */
function getExchangeType(param){
  return  http("get",hosttUrl+`/web/exchange/index`);
}
//获得验证码
function getCode (param) {
  return http("get",hosttUrl+'/web/captcha/send',param)
}

//查询用户信息
function getUserInfo(param){
  return http("get",hosttUrl+'/web/user/info',param)
}

//校验验证码
function checkSCodeActive(param){
  return http('get',hosttUrl+'/web/captcha/verify',param)
}

//发起兑换
function initiateConversion(param){
  return http('post',hosttUrl+'/web/exchange/create',param)
}





export {
    loginActive,
    getCurrencyList,
    getCurrencyBalance,
    getCurrencyConfig,
    getExchangeType,
    getCode,
    getUserInfo,
    checkSCodeActive,
    initiateConversion
}

