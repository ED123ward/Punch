import PropTypes from "prop-types";
import React, { Component, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./mobile.module.scss";

import Background from "../../../../assets/userLogin/background.png";
import Logo from "../../../../assets/userLogin/logoText.png";
import Text from "../../../../assets/userLogin/login_text.png";
import Content from "../../../../assets/userLogin/login_content.png";
import LoginIcon1 from "../../../../assets/userLogin/login_icon1.png";
import LoginIcon2 from "../../../../assets/userLogin/login_icon2.png";
import LoginIcon3 from "../../../../assets/userLogin/login_icon3.png";
import LoginArrowBlack from "../../../../assets/userLogin/login_arrow_black.png";
import LoginArrowWhite from "../../../../assets/userLogin/login_arrow_white.png";

import useGoogle from "../../../../hooks/google";
import useFB from "../../../../hooks/facebook"

import { loginActive } from "../../../../api/user";






export const Mobile = () => {

  
  const navigate = useNavigate()

  const { handleLoginGoogle } = useGoogle();
  const { handleLoginFB } = useFB();

  const goEmailPage = ()=> {
    navigate('/emaillogin')
  }

  //判断是不是登录

const getToken = ()=>{
  console.log(localStorage.getItem("token"))
  // if (
  //   localStorage.getItem("token") !== '' &&
  //   localStorage.getItem("token") !== 'undefined'
  // ) {
  //   navigate('/currency')
  // }
}

//google登录
const loginGoogle = async () =>{
  let data = await handleLoginGoogle()
  if(data.length !== 0){
    openId(data[0].uid)
  }else{
    alert('error')
  }
}

//facebook登录
const loginFB = async () =>{
  let data = await handleLoginFB()
  if(data.length !== 0){
    openId(data[0].uid)
  }else{
    alert('error')
  }
}

  //登录
  const openId = async (openId) => {
    let query = {
      loginType: 4,
      openId:openId
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


  useEffect(() => {
    getToken();
  },[]);
  return (
    <>
      <div className={styles.page}>
      <div className={styles.pageBackground}>
          <img className={styles.pageBackgroundImg} src={Background} />
        </div>

        <div className={styles.headBlock}>
          <div className={styles.logoBlock}>
            <img className={styles.logo} src={Logo} alt=""></img>
          </div>
        </div>

        <div className={styles.bodyBlock}>
          <div className={styles.textBlock}>
            <img className={styles.textImg} src={Text} alt=''></img>
          </div>
        </div>

        <div className={styles.bottomBlock}>
          <div className={styles.contentBlock}>
            <img className={styles.contentImg} src={Content} alt=''></img>
          </div>
          <div className={styles.buttons}>
            <div className={`${styles.button} ${styles.buttonEmail}`} onClick={()=>{goEmailPage()}}>
              <div className={styles.buttonLeft}>
                <img src={LoginIcon2} className={styles.buttonIcon} alt=''></img>
                <div className={styles.buttonText}>Continue with Email</div>
              </div>
              <div className={styles.buttonRight}>
                <img src={LoginArrowWhite} className={styles.buttonArrow} alt=''></img>
              </div>
            </div>
            <div className={`${styles.button} ${styles.buttonGoogel}`} onClick={loginGoogle}>
              <div className={styles.buttonLeft}>
                <img src={LoginIcon3} className={styles.buttonIcon} alt=''></img>
                <div className={`${styles.buttonText} ${styles.buttonTextBlack}`}>Continue with Google</div>
              </div>
              <div className={styles.buttonRight}>
                <img src={LoginArrowBlack} className={styles.buttonArrow} alt=''></img>
              </div>
            </div>
            <div className={`${styles.button} ${styles.buttonFacebook}`} onClick={loginFB}>
              <div className={styles.buttonLeft}>
                <img src={LoginIcon1} className={styles.buttonIcon} alt=''></img>
                <div className={`${styles.buttonText}`}>Continue with Facebook</div>
              </div>
              <div className={styles.buttonRight}>
                <img src={LoginArrowWhite} className={styles.buttonArrow} alt=''></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
