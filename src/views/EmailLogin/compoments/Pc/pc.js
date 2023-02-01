import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CryptoJs from "crypto-js";

import { message } from 'antd';

import styles from "./pc.module.scss";

import Background from "../../../../assets/userLogin/background.png";
import BlackArrow from "../../../../assets/userLogin/blackArrow.png";
import RightIcon from "../../../../assets/home/rightIcon.png";
import ErrorIcon from "../../../../assets/home/errIcon.png";
import PassShow from "../../../../assets/home/passShow.png";
import PassHide from "../../../../assets/home/passHide.png";
import LoginActive from "../../../../assets/userLogin/loginActive.png";

import { debounce } from "../../../../utils/utils";

import { loginActive } from "../../../../api/user";

export const PC = () => {
  const [emailValue, setEmailValue] = useState();
  const [emailErrorStatue, setEmailErrorStatue] = useState(false);

  const [passWordValue, setPassWordValue] = useState();
  const [passWordShowStatu, setPassWordShowStatu] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passAa, setPassAa] = useState(false);
  const [passNum, setPassNum] = useState(false);
  const [passFouse, setPassFouse] = useState(false);

  const navigate = useNavigate();

  const emailInput = React.useRef(false);
  const passInput = React.useRef(false);

  //返回上一页
  const goBackPage = () => {
    navigate(-1);
  };

  //判断email输入
  const emailValueChange = debounce((e) => {
    let value = e.target.value;
    let reg =
      /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    let bool = reg.test(value);
    let regLength = /^(a-z|A-Z|0-9)*[^$%^&*;:,<>?()']{4,50}$/;
    let boolLength = regLength.test(value);
    console.log(bool);
    console.log(boolLength);
    if (bool && boolLength) {
      setEmailErrorStatue(false);
    } else {
      setEmailErrorStatue(true);
    }
  }, 500);

  //判断密码输入
  const passWordValueChange = debounce((e) => {
    let value = e.target.value;
    console.log(value);
    let regLength = /^(a-z|A-Z|0-9)*[^$%^&*;:,<>?()']{8,16}$/;
    let boolLength = regLength.test(value);
    if (boolLength) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }

    let regAa = /\D/;
    let boolAa = regAa.test(value);
    if (boolAa) {
      setPassAa(true);
    } else {
      setPassAa(false);
    }

    let regNum = /^(?![a-zA-Z]+$)[0-9a-zA-Z]/;
    let boolNum = regNum.test(value);
    if (boolNum) {
      setPassNum(true);
    } else {
      setPassNum(false);
    }
  }, 50);

  // 获得焦点
  const passWordFocus = () => {
    setPassFouse(true);
  };
  //失去焦点
  const passWordBlur = () => {
    // setPassFouse(false);
  };
  //控制密码展示
  const passWordShow = () => {
    let statu = false;
    if (passWordShowStatu) {
      statu = false;
    } else {
      statu = true;
    }
    setPassWordShowStatu(statu);
  };

  //登录
  const singUp = async () => {
    let eValue = emailInput.current.value;
    let pValue = passInput.current.value;
    if (eValue === "" || emailErrorStatue) {
      // alert("Please enter the correct email address!");
      message.info('Please enter the correct email address!');
      return;
    }
    if (pValue === "" || (!passLength && !passAa && !passNum)) {
      // alert("Please enter the correct password!");
      message.info('Please enter the correct password!');
      return;
    }
    let aesPass = asePass(pValue, "");
    let query = {
      loginType: 1,
      loginName: eValue,
      password: aesPass,
    };

    let data = await loginActive(query);
    if (data.code === 200 && data.msg === "success") {
      if (
        localStorage.getItem("token") == null ||
        localStorage.getItem("token") === undefined
      ) {
        localStorage.setItem("token", "");
      }
      localStorage.setItem("token", data.data);
      navigate("/currency");
    } else {
      alert(data.msg);
    }
  };
  //ASE加密
  const asePass = (passWord, pkey) => {
    let iv = CryptoJs.enc.Utf8.parse("");
    let key = CryptoJs.enc.Utf8.parse("k983sdj@74687#89");
    let srcs = CryptoJs.enc.Utf8.parse(passWord);
    let encrypted = CryptoJs.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJs.mode.CBC,
      padding: CryptoJs.pad.Pkcs7,
    });
    console.log(encrypted.toString());
    return encrypted.toString();
  };

  return (
    <>
      <div className={styles.page}>
    
        <div className={styles.headBlock}>
          <img
            className={styles.pageBlackArrow}
            src={BlackArrow}
            onClick={() => {
              goBackPage();
            }}
          />
        </div>

        <div className={styles.bodyBlock}>
          <div className={styles.inputText}>Sign in with email</div>

          <div className={`${styles.input}`}>
            <input
              className={`${styles.inputStyle}`}
              ref={emailInput}
              type="text"
              placeholder="Enter your email"
              value={emailValue}
              onChange={(e) => emailValueChange(e)}
            />
            {emailErrorStatue ? (
              <div className={`${styles.errorShow}`}>Invaild email</div>
            ) : (
              ""
            )}
          </div>
          <div className={`${styles.input} ${styles.passInputHeight}`}>
            <input
              className={`${styles.inputStyle}`}
              ref={passInput}
              type={passWordShowStatu ? "" : "password"}
              placeholder="Password"
              value={passWordValue}
              onChange={(e) => passWordValueChange(e)}
              onFocus={() => passWordFocus()}
              onBlur={() => passWordBlur()}
            />
            <div className={styles.emailDeleteBlock}>
              <img
                className={styles.passImg}
                src={passWordShowStatu ? PassShow : PassHide}
                alt="passImg"
                onClick={() => {
                  passWordShow();
                }}
              />
            </div>
            {/* {passFouse ? (
              <div className={styles.passwordRuleBlock}>
                <div className={styles.passWordTitle}>
                  Create a password that:
                </div>
                <div className={styles.passWordRuleLine}>
                  <div className={styles.ruleIconBlock}>
                    <img
                      className={styles.ruleIcon}
                      src={passLength ? RightIcon : ErrorIcon}
                      alt="successIcon"
                    />
                  </div>
                  <div
                    className={`${styles.ruleText} ${
                      passLength ? "" : styles.ruleTextError
                    }`}
                  >
                    contains at least 8 characters
                  </div>
                </div>
                <div className={styles.passWordRuleLine}>
                  <div className={styles.ruleIconBlock}>
                    <img
                      className={styles.ruleIcon}
                      src={passAa ? RightIcon : ErrorIcon}
                      alt="successIcon"
                    />
                  </div>
                  <div
                    className={`${styles.ruleText} ${
                      passAa ? "" : styles.ruleTextError
                    }`}
                  >
                    contains both lower (a-z) and upper case letters (A-Z)
                  </div>
                </div>
                <div className={styles.passWordRuleLine}>
                  <div className={styles.ruleIconBlock}>
                    <img
                      className={styles.ruleIcon}
                      src={passNum ? RightIcon : ErrorIcon}
                      alt="successIcon"
                    />
                  </div>
                  <div
                    className={`${styles.ruleText} ${
                      passNum ? "" : styles.ruleTextError
                    }`}
                  >
                    contains at least one number (0-9)
                  </div>
                </div>
              </div>
            ) : (
              ""
            )} */}
          </div>
        </div>

        <div className={styles.bottomBlock}>
          <img
            className={styles.button}
            src={LoginActive}
            alt=""
            onClick={() => {
              singUp();
            }}
          ></img>
        </div>
      </div>
    </>
  );
};
