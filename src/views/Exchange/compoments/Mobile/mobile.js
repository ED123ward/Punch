import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { debounce } from "../../../../utils/utils";
import { Button, message, Space, Modal } from "antd";

import styles from "./mobile.module.scss";
import { Slider } from "antd";

import Background from "../../../../assets/userLogin/background.png";
import Logo from "../../../../assets/userLogin/logoText.png";
import BottomArrow from "../../../../assets/userLogin/bottomArrow.png";
import MiddleArrow from "../../../../assets/userLogin/middleArrow.png";
import SignOut from "../../../../assets/userLogin/signout.png";
import CaseOut from "../../../../assets/userLogin/cashOut.png";
import WaitImg from "../../../../assets/userLogin/wait.png";
import Next from "../../../../assets/userLogin/next.png";
import CaseOutActive from "../../../../assets/userLogin/cashOutActive.png";

import { completeEmail, browser } from "../../../../utils/bridge";

import {
  getCurrencyList,
  getCurrencyBalance,
  getCurrencyConfig,
  getExchangeType,
  getCode,
  getUserInfo,
  checkSCodeActive,
  initiateConversion,
} from "../../../../api/user";

export const Mobile = () => {
  const state = useLocation();
  console.log(state);
  const [currencyType, setCurrencyType] = useState(state.state.currency);
  const [currencyTypeName, setCurrencyTypeName] = useState(
    state.state.currencyName
  );
  const [currencyList, setCurrencyList] = useState([]);
  const [showChange, setShowChange] = useState("hide");

  const [sliderTotle, setSliderTotle] = useState(0);
  const [sliderMin, setSliderMin] = useState(6);
  const [sliderMax, setSliderMax] = useState(100);
  const [sliderNum, setSliderNum] = useState("-");

  const [isPunch, setIsPunch] = useState(true);

  const [thresholdValue, setThresholdValue] = useState();

  const [currencyIndexPage, setCurrencyIndexPage] = useState({});

  const [bitmartFirstEmailValue, setBitmartFirstEmailValue] = useState();
  const [bitmartFirstEmailErrorStatue, setBitmartFirstEmailErrorStatue] =
    useState();
  const bitmartFirstEmailInput = React.useRef(false);

  const [securityCodeValue, setSecurityCodeValue] = useState();
  const securityCodeInput = React.useRef(false);

  const [securityCodeText, setSecurityCodeText] = useState("Sent");
  const [securityCodeTextStatu, setSecurityCodeTextStatu] = useState(false);
  const [securityCodeErrorStatue, setSecurityCodeErrorStatue] = useState(false);
  const securityEmailInput = useRef();

  const [securityEmailValue, setSecurityEmailValue] = useState();
  const [securityEmailErrorStatue, setSecurityEmailErrorStatue] = useState();

  const [currencyStep, setCurrencyStep] = useState(1);

  //bitmart

  const [bitmartCodeValue, setBitmartCodeValue] = useState();
  const bitmartCodeInput = React.useRef(false);

  const [bitmartCodeText, setBitmartCodeText] = useState("Sent");
  const [bitmartCodeTextStatu, setBitmartCodeTextStatu] = useState(false);
  const [bitmartCodeErrorStatue, setBitmartCodeErrorStatue] = useState(false);
  const bitmartEmailInput = useRef();

  const [bitmartEmailValue, setBitmartEmailValue] = useState();
  const [bitmartEmailErrorStatue, setBitmartEmailErrorStatue] = useState();

  const [userInfo, setUserInfo] = useState();

  const navigate = useNavigate();

  const [showExchangeButton, setShowExchangeButton] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [lastesTimeMap, setLastesTimeMap] = useState({});

  const changeType = (item) => {
    setTimeout(() => {
      setCurrencyType(item.currency);
      setShowChange("hide");
      setCurrencyTypeName(item.name);
      exchangeActive(item);
    }, 100);

    getExchangeNum(item.currency);
  };

  //计算汇率
  const exchangeActive = (item) => {
    console.log(item);
    if (item.exchangeRate != null && sliderTotle !== 0) {
      console.log(sliderTotle);
      let num = (
        Math.floor(
          parseFloat(sliderTotle) * parseFloat(item.exchangeRate) * 1000
        ) / 1000
      ).toFixed(item.scale);
      console.log(num);
      setSliderNum(num);
    } else {
      setSliderNum("-");
    }
  };

  //是否是App打开
  const isAppOpen = () => {
    const ua = navigator.userAgent;
    const isPunch = ua.indexOf("Punch") > -1;
    if (!isPunch) {
      setIsPunch(false);
    }
  };

  const getCurrencyInfo = async () => {
    let data = await getCurrencyList();
    console.log(data);
    setCurrencyList(data.data);
    data.data.map((item, index) => {
      if (item.currency === currencyType) {
        exchangeActive(item);
      }
    });
  };

  const onChange = (value) => {
    setSliderNum(value);
  };

  const getExchangeNum = async (type) => {
    let query = {
      currency: type,
    };
    let data = await getCurrencyBalance(query);
  };

  const showChangeActive = () => {
    if(showChange === 'hide'){
      setTimeout(() => {
        setShowChange("show");
      }, 200);
      
    }else{
      setTimeout(() => {
        setShowChange("hide");
      }, 200);
     
    }
   
  };

  const getCurrencyConfigData = async () => {
    let data = await getCurrencyConfig();
    setThresholdValue(data.data.exchangeMinCredit);
  };

  const getVoucher = async () => {
    let query = {
      currency: "voucher",
    };
    let data = await getCurrencyBalance(query);
    let num = (Math.floor(parseFloat(data.data.balance) * 100) / 100).toFixed(
      2
    );
    setSliderTotle(num);
  };

  const signOut = async () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  //获得兑换状态首页
  const exchangeType = async () => {
    let info = await getExchangeType();
    console.log(info);
    info.data.exchangeStatus = 1;
    if (info.data.exchangeStatus === 1 && info.data.latestDetail !== null) {
      setCurrencyStep(2);
      setBitmartFirstEmailValue(info.data.latestDetail.email)
      if (userInfo.email === null) {
        secureMailboxApp();
        return false;
      }
    }
    if (info.data.exchangeStatus === 4) {
      lasterCurrency(info.data);
    }
    setCurrencyIndexPage(info.data);
  };

  //获得上次提现信息
  const lasterCurrency = async (data) => {
    let map = data;
    let laseterTime = new Date(map.latestDetail.createAt);
    let laseteryear = laseterTime.getFullYear();
    let lasetermonth = laseterTime.getMonth() + 1;
    let laseterday = laseterTime.getDate();


    //计算倒计时

    let down = map.config.timeInterval + map.latestDetail.createAt - new Date();

    let lasterTimeMap = {
      email: map.latestDetail.email,
      laseteryear: laseteryear,
      lasetermonth: lasetermonth,
      laseterday: laseterday,
    };

    lasterTimeMap.downmini = Math.floor((down / 1000 / 60) % 60);
    lasterTimeMap.downhour = Math.floor((down / 1000 / 60 / 60) % 24);
    lasterTimeMap.downday = Math.floor(down / 1000 / 60 / 60 / 24);

    setLastesTimeMap(lasterTimeMap);


  };

  //判断email输入
  const bitmartFirstEmailValueChange = debounce((e) => {
    let value = e.target.value;
    let reg =
      /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    let bool = reg.test(value);
    let regLength = /^(a-z|A-Z|0-9)*[^$%^&*;:,<>?()']{4,50}$/;
    let boolLength = regLength.test(value);
    console.log(bool);
    console.log(boolLength);
    if (bool && boolLength) {
      setBitmartFirstEmailErrorStatue(false);
    } else {
      setBitmartFirstEmailErrorStatue(true);
    }
  }, 500);

  //判断email输入
  const securityEmailValueChange = debounce((e) => {
    let value = e.target.value;
    let reg =
      /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    let bool = reg.test(value);
    let regLength = /^(a-z|A-Z|0-9)*[^$%^&*;:,<>?()']{4,50}$/;
    let boolLength = regLength.test(value);
    console.log(bool);
    console.log(boolLength);
    if (bool && boolLength) {
      setSecurityEmailErrorStatue(false);
    } else {
      setSecurityEmailErrorStatue(true);
    }
  }, 500);

  //判断email输入
  const bitmartEmailValueChange = debounce((e) => {
    let value = e.target.value;
    let reg =
      /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    let bool = reg.test(value);
    let regLength = /^(a-z|A-Z|0-9)*[^$%^&*;:,<>?()']{4,50}$/;
    let boolLength = regLength.test(value);
    console.log(bool);
    console.log(boolLength);
    if (bool && boolLength) {
      setBitmartEmailErrorStatue(false);
    } else {
      setBitmartEmailErrorStatue(true);
    }
  }, 500);

  //判断验证码输入
  const securityCodeValueChange = debounce((e) => {
    let value = e.target.value;
    let codeLength = value.length;
    let data = value;
    if (codeLength > 6) {
      data = value.slice(0, 6);
      securityCodeInput.current.value = data;
    }

    let reg = /^\d{6}$/;
    let bool = reg.test(data);

    if (bool) {
      setSecurityCodeErrorStatue(false);
    } else {
      setSecurityCodeErrorStatue(true);
    }
  }, 0);

  //点击发送验证码
  const securitySendCode = debounce(async () => {
    if (securityCodeTextStatu) {
      return;
    }
    let eValue = securityEmailInput.current.value;
    if (eValue === "" || securityEmailErrorStatue) {
      message.error("Please enter the correct email address!");
      return;
    }
    let query = {
      authWith: 1,
      type: 4,
      email: eValue,
    };
    console.log(query);
    let data = await getCode(query);
    if (data.code === 200 && data.msg === "success") {
      setSecurityCodeTextStatu(true);
      downTime();
    } else {
      message.error(data.msg);
    }
  }, 500);

  //判断验证码输入
  const bitmartCodeValueChange = debounce((e) => {
    let value = e.target.value;
    let codeLength = value.length;
    let data = value;
    if (codeLength > 6) {
      data = value.slice(0, 6);
      bitmartCodeInput.current.value = data;
    }

    let reg = /^\d{6}$/;
    let bool = reg.test(data);

    if (bool) {
      setBitmartCodeErrorStatue(false);
    } else {
      setBitmartCodeErrorStatue(true);
    }
  }, 0);

  //点击发送验证码
  const bitmartSendCode = debounce(async () => {
    if (bitmartCodeTextStatu) {
      return;
    }
    let eValue = bitmartEmailInput.current.value;
    if (eValue === "" || bitmartEmailErrorStatue) {
      message.error("Please enter the correct email address!");
      return;
    }
    let query = {
      authWith: 1,
      type: 5,
      email: eValue,
    };
    console.log(query);
    let data = await getCode(query);
    if (data.code === 200 && data.msg === "success") {
      setBitmartCodeTextStatu(true);
      downTimeB();
    } else {
      message.error(data.msg);
    }
  }, 500);

  //倒计时
  const downTime = () => {
    let time = 60;
    let downActive = setInterval(() => {
      time--;
      setSecurityCodeText(time);
      if (time === 0) {
        clearInterval(downActive);
        setSecurityCodeText("Send");
        setSecurityCodeTextStatu(false);
      }
    }, 1000);
  };

  //倒计时
  const downTimeB = () => {
    let time = 60;
    let downActive = setInterval(() => {
      time--;
      setBitmartCodeText(time);
      if (time === 0) {
        clearInterval(downActive);
        setBitmartCodeText("Send");
        setBitmartCodeTextStatu(false);
      }
    }, 1000);
  };

  // next
  const nextActive = () => {
    let step = currencyStep;
    step++;
    if (userInfo.email === null) {
      secureMailboxApp();
      return false;
    }
    if (step === 2) {
      setTimeout(() => {
        setCurrencyStep(step);
        console.log(userInfo.email);
        if (userInfo.email === null) {
          secureMailboxApp();
          return false;
        }
      }, 100);
    }
    if (step === 3) {
      let bEmail = bitmartFirstEmailInput.current.value;
      console.log(bitmartFirstEmailInput.current.value);
      setBitmartFirstEmailValue(bitmartFirstEmailInput.current.value);
      if (!bitmartFirstEmailErrorStatue && bEmail !== "") {
        setTimeout(() => {
          setCurrencyStep(step);
        }, 100);
      } else {
        setBitmartFirstEmailErrorStatue(true);
      }
      let sEmail = userInfo.email;
      if (sEmail === bEmail) {
        setTimeout(() => {
          setShowExchangeButton(true);
        }, 100);
      }
    }
    if (step === 4) {
      if (showExchangeButton) {
        exchange();
      } else {
        //验证安全邮箱的验证码
        checkSCode();
      }
    }
  };

  //跳转App填写安全邮箱

  const secureMailboxApp = () => {
    showModal();
  };

  const checkSCode = async () => {
    if (securityCodeInput.current.value === "" && !securityCodeErrorStatue) {
      setSecurityCodeErrorStatue(true);
      return false;
    }
    let data = {
      authWith: 1,
      captcha: securityCodeInput.current.value,
      type: 4,
      email: securityEmailInput.current.value,
    };
    let info = await checkSCodeActive(data);
    console.log(info);
    if (info.code === 200) {
      setSecurityCodeValue(securityCodeInput.current.value);
      setTimeout(() => {
        let step = currencyStep;
        step++;
        setCurrencyStep(step);
        setTimeout(() => {
          setBitmartEmailValue(bitmartFirstEmailValue);
        }, 500);
      }, 100);
    } else {
      message.error("Invalid code");
    }
  };
  //兑换
  const exchange = async () => {
    if (
      currencyStep === 3 &&
      (securityCodeInput.current.value === "" || securityCodeErrorStatue)
    ) {
      setSecurityCodeErrorStatue(true);
    }

    let data = {
      toCurrency: currencyType,
    };
    if (currencyStep === 3) {
      data.securityEmailCaptcha = securityCodeInput.current.value;
    }
    if (currencyStep === 4) {
      data.securityEmailCaptcha = securityCodeValue;
      data.exchangeEmail = bitmartEmailInput.current.value;
      data.exchangeEmailCaptcha = bitmartCodeInput.current.value;
    }
    console.log(data);
    try {
      let info = await initiateConversion(data);
      if (info.code === 200) {
        setTimeout(() => {
          setCurrencyStep(5);
        }, 500);
      } else {
        message.error("Invalid code");
      }
    } catch (error) {}
  };

  //获得用户信息
  const getUserInfoActive = async () => {
    let info = await getUserInfo();
    setUserInfo(info.data);
    console.log(info.data.email);
    if (info.data.email !== "" && info.data.email !== null) {
      setTimeout(() => {
        // securityEmailInput.current.value = info.data.email;
        setSecurityEmailValue(info.data.email);
      }, 500);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    getBirdgeEmail();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getBirdge = () => {
    let url = currencyIndexPage.config.registerUrl;
    browser(url);
  };

  const getBirdgeEmail = () => {
    completeEmail();
  };

  useEffect(() => {
    getUserInfoActive();
    exchangeType();
    getExchangeNum(currencyType);
    getCurrencyConfigData();
    getVoucher();
    getCurrencyInfo();
    isAppOpen();
  }, [sliderTotle]);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.pageBackground}>
          <img className={styles.pageBackgroundImg} src={Background} alt="" />
        </div>

        <div className={styles.headBlock}>
          <div className={styles.logoBlock}>
            <img className={styles.logo} src={Logo} alt=""></img>
          </div>
          <div className={styles.signOutBlock}>
            {isPunch ? (
              ""
            ) : (
              <img
                onClick={signOut}
                className={styles.signOut}
                src={SignOut}
                alt=""
              ></img>
            )}
          </div>
        </div>

        <div className={styles.bodyBlock}>
          <div className={styles.block}>
            <div className={styles.blockCard}>
              <div className={styles.text}>Your Punch Points</div>
              <div className={styles.num}>{sliderTotle}</div>
              <div className={styles.slider}>
                {/* <Slider
                  min={sliderMin}
                  max={sliderMax}
                  step={0.01}
                  onChange={onChange}
                /> */}
                <div className={styles.middelLine}>
                  <img
                    className={styles.middleArrowImg}
                    src={MiddleArrow}
                    alt=""
                  ></img>
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.exNum}>{sliderNum}</div>
                <div
                  className={styles.exButton}
                  onClick={() => {
                    showChangeActive();
                  }}
                >
                  <div className={styles.currencyName}>{currencyTypeName}</div>
                  <div className={styles.bottomArrowIconBlock}>
                    <img
                      className={styles.bottomArrowIcon}
                      src={BottomArrow}
                      alt=""
                    ></img>
                  </div>
                  <div
                    className={
                      showChange === "show"
                        ? `${styles.currencyList}`
                        : `${styles.hide}`
                    }
                  >
                    {currencyList.map((item, index) => {
                      return (
                        <>
                          <div
                            className={styles.currencyLine}
                            onClick={() => {
                              changeType(item);
                            }}
                          >
                            <div className={styles.singleImgBlock}>
                              <img
                                className={styles.singleImg}
                                src={item.icon}
                                alt=""
                              ></img>
                            </div>
                            <div className={styles.singleText}>{item.name}</div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* */}
          </div>
        </div>
        {/* 积分不足 */}
        {currencyIndexPage.exchangeStatus === 2 ? (
          <div className={styles.showText}>
            You need to have at least {currencyIndexPage.config.minCredit} Punch Points to cash out.
          </div>
        ) : (
          <div className={styles.showText}>CONVERSION RATE MAY VARY.</div>
        )}
        {/* 48小时到账 */}
        {currencyIndexPage.exchangeStatus === 5 ||
        currencyIndexPage.exchangeStatus === 3 ? (
          <div className={styles.inCashOut}>
            <div className={styles.cashOutNum}>
              {currencyIndexPage.latestDetail.toAmount} &nbsp;{currencyIndexPage.latestDetail.toCurrency}
            </div>
            <div className={styles.cashOutInContent}>
              will be in your Bitmart account in minutes.
            </div>
            <div className={styles.cashOutInText}>
              <div className={styles.lineText}>
                Please check your email to complete the process.Please allow up
                to{" "}
                <div className={`${styles.lineText}  ${styles.cashOutTime}`}>
                  48 hours
                </div>
              </div>

              <div className={styles.lineText}> before contacting support.</div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* 倒计时 */}
        {currencyIndexPage.exchangeStatus === 4 ? (
          <div className={styles.inCashOut}>
            <div className={styles.cashOutNum}>
            {currencyIndexPage.latestDetail.toAmount} &nbsp;{currencyIndexPage.latestDetail.toCurrency}
            </div>
            <div className={styles.cashOutInContent}>
              was sent to your Bitmart account (
              {currencyIndexPage.latestDetail.email}) on{" "}
              {lastesTimeMap.laseterday}/{lastesTimeMap.lasetermonth}/{lastesTimeMap.laseteryear}.
            </div>
            <div className={styles.cashOutInText}>
              <div className={styles.lineText}>
                Please check your email for more detail.
              </div>
              <div className={styles.timeDown}>
                <div>Next Cash Out In :</div>
                <div className={styles.downTimeStyle}>
                  {lastesTimeMap.downday}d {lastesTimeMap.downhour}h{" "}
                  {lastesTimeMap.downmini}min
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* 提现 */}
        {currencyIndexPage.exchangeStatus === 1 && currencyStep === 1 ? (
          <div className={styles.inCashOut}>
            <div className={styles.lineText2}>Do u have a Bitmart account?</div>
            <div className={styles.cashOutInContent}>
              It needs bitmart account to receive tokens.
            </div>
            <div className={styles.cashOutInButtonBlock}>
              <div
                onClick={() => {
                  nextActive();
                }}
                className={styles.cashOutInButton}
              >
                YES,Cash out Now
              </div>
              <div
                onClick={() => {
                  getBirdge();
                }}
                className={styles.cashOutInButton}
              >
                No,Reg First
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {currencyIndexPage.exchangeStatus === 1 && currencyStep === 2 ? (
          <div className={styles.inCashOut}>
            <div className={styles.lineText2}>Withdraw to Bitmart</div>
            <div className={styles.cashOutInContent}>
              This is the Bitmart email address that you are cashing out to.
            </div>
            <div className={styles.cashOutInIputBlock}>
              <input
                className={`${styles.inputStyle}`}
                ref={bitmartFirstEmailInput}
                type="text"
                placeholder="Enter your email"
                value={bitmartFirstEmailValue}
                onChange={(e) => bitmartFirstEmailValueChange(e)}
              />
              {bitmartFirstEmailErrorStatue ? (
                <div className={`${styles.errorShow}`}>Invaild email</div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {currencyIndexPage.exchangeStatus === 1 && currencyStep === 3 ? (
          <div className={styles.inCashOut}>
            <div className={styles.lineText2}>Security verification</div>
            <div className={styles.cashOutInInputBlock}>
              <input
                className={`${styles.inputStyle}`}
                ref={securityEmailInput}
                type="text"
                placeholder="Enter your email"
                value={securityEmailValue}
                onChange={(e) => securityEmailValueChange(e)}
                disabled={securityEmailValue === "" ? false : true}
              />
              {securityEmailErrorStatue ? (
                <div className={`${styles.errorShow}`}>Invaild email</div>
              ) : (
                ""
              )}
            </div>
            <div className={styles.cashOutInInputBlock}>
              <input
                className={`${styles.inputStyle} ${styles.sendInput}`}
                ref={securityCodeInput}
                type="number"
                placeholder="Verification Code"
                value={securityCodeValue}
                onChange={(e) => securityCodeValueChange(e)}
              />
              <div
                onClick={() => {
                  securitySendCode();
                }}
                className={styles.sendCodeBlock}
              >
                <div
                  className={`${
                    !securityCodeTextStatu ? styles.sendCode : styles.sendLoad
                  }`}
                >
                  {securityCodeText}
                </div>
              </div>
              {/* {securityCodeErrorStatue ? (
                <div className={styles.errorShow}>
                  Invaild verification code
                </div>
              ) : (
                ""
              )} */}
            </div>
          </div>
        ) : (
          ""
        )}

        {currencyIndexPage.exchangeStatus === 1 && currencyStep === 4 ? (
          <div className={styles.inCashOut}>
            <div className={styles.lineText2}>Withdraw to Bitmart</div>
            <div className={styles.cashOutInInputBlock}>
              <input
                className={`${styles.inputStyle}`}
                ref={bitmartEmailInput}
                type="text"
                placeholder="Enter your email"
                value={bitmartEmailValue}
                disabled={bitmartEmailValue === "" ? false : true}
                onChange={(e) => bitmartEmailValueChange(e)}
              />
              {bitmartEmailErrorStatue ? (
                <div className={`${styles.errorShow}`}>Invaild email</div>
              ) : (
                ""
              )}
            </div>
            <div className={styles.cashOutInInputBlock}>
              <input
                className={`${styles.inputStyle} ${styles.sendInput}`}
                ref={bitmartCodeInput}
                type="number"
                placeholder="Verification Code"
                value={bitmartCodeValue}
                onChange={(e) => bitmartCodeValueChange(e)}
              />
              <div
                onClick={() => {
                  bitmartSendCode();
                }}
                className={styles.sendCodeBlock}
              >
                <div
                  className={`${
                    !bitmartCodeTextStatu ? styles.sendCode : styles.sendLoad
                  }`}
                >
                  {bitmartCodeText}
                </div>
              </div>
              {/* {bitmartCodeErrorStatue ? (
                <div className={styles.errorShow}>
                  Invaild verification code
                </div>
              ) : (
                ""
              )} */}
            </div>
          </div>
        ) : (
          ""
        )}

        {currencyIndexPage.exchangeStatus === 1 && currencyStep === 5 ? (
          <div className={styles.inCashOut}>
            <div className={styles.cashOutNum}>
              {sliderNum}
              {currencyTypeName}
            </div>
            <div className={styles.cashOutInContent}>
              will be in your Bitmart account in minutes.
            </div>
            <div className={styles.cashOutInText}>
              <div className={styles.lineText}>
                Please check your email to complete the process.Please allow up
                to{" "}
                <div className={`${styles.lineText}  ${styles.cashOutTime}`}>
                  48 hours
                </div>
              </div>

              <div className={styles.lineText}> before contacting support.</div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.caseOutButton}>
        {currencyIndexPage.exchangeStatus === 3 ? (
            <img
              className={`${styles.caseOutImg} `}
              src={CaseOut}
              alt=""
            ></img>
          ) : (
            ""
          )}
          
          {
          showExchangeButton ||
          currencyStep === 4 ? (
            <img
              onClick={() => {
                exchange();
              }}
              className={`${styles.caseOutImg} ${styles.caseOutImgActive}`}
              src={CaseOutActive}
              alt=""
            ></img>
          ) : (
            ""
          )}
          {currencyIndexPage.exchangeStatus === 4 ? (
            <img
              className={`${styles.caseOutImg} ${styles.caseOutImgActive}`}
              src={WaitImg}
              alt=""
            ></img>
          ) : (
            ""
          )}
          {currencyIndexPage.exchangeStatus === 1 &&
          currencyStep !== 1 &&
          !showExchangeButton &&
          currencyStep !== 4 ? (
            <img
              onClick={() => {
                nextActive();
              }}
              className={`${styles.caseOutImg} ${styles.caseOutImgActive}`}
              src={Next}
              alt=""
            ></img>
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal
        closable={false}
        maskClosable={false}
        footer={[
          <Button key="back" centered={true} onClick={handleOk}>
            Setting
          </Button>,
        ]}
        open={isModalOpen}
      >
        <div className={styles.showModalText}>
          Please set up your email in the PunchGames APP first.
        </div>
      </Modal>
    </>
  );
};
