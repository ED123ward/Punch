import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./mobile.module.scss";

import cookie from "react-cookies";

import Background from "../../../../assets/userLogin/background.png";
import Logo from "../../../../assets/userLogin/logoText.png";
import SignOut from "../../../../assets/userLogin/signout.png";

import { getCurrencyList } from "../../../../api/user";

import { message,Modal } from "antd";

export const Mobile = () => {
  const [currencyType, setCurrencyType] = useState();
  const [currencyList, setCurrencyList] = useState([]);
  const [isPunch, setIsPunch] = useState(true);

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const changeType = (type, item) => {
    setCurrencyType(type);
    setTimeout(() => {
      goExchange(item);
    }, 1000);
  };
  const getCurrencyInfo = async () => {
    let data = await getCurrencyList();
    if (data.code === 200) {
      setCurrencyList(data.data);
    } else {
      message.info(data.msg);
      const ua = navigator.userAgent;
      const isPunch = ua.indexOf("Punch") > -1;
      if (!isPunch) {
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        alert("error");
      }
    }
  };
  const goExchange = async (item) => {
    navigate("/exchange", {
      state: { currency: item.currency, currencyName: item.name },
    });
  };

  const signOut = async () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  //获得是否是登录跳转
  //获得token

  const getUrlQuery = async () => {
    let location = window.location;
    let search = location.hash.split("?token=");
    let cookie_token = cookie.load("token") || '';
    let storage_token = localStorage.getItem("token") || '';
    console.log(search);
    if (search[1] !== undefined && search[1].length > 10) {
      console.log(search[1]);
      if (search[1] == null || search[1] === undefined) {
        localStorage.setItem("token", "");
      } else {
        localStorage.setItem("token", search[1]);
        setTimeout(() => {
          getCurrencyInfo();
        }, 500);
      }
    } else if (cookie_token !== undefined && cookie_token.length > 10) {
      localStorage.setItem("token", cookie_token);
      setTimeout(() => {
        getCurrencyInfo();
      }, 500);
    } else if (storage_token !== undefined && storage_token.length > 10) {
      setTimeout(() => {
        getCurrencyInfo();
      }, 500);
    } else {
      const ua = navigator.userAgent;
      const isPunch = ua.indexOf("Punch") > -1;
      if (!isPunch) {
        setTimeout(() => {
          navigate("/");
        }, 500);
      }else{
        Modal.error({
          title: 'This is an error message',
          content: 'Please return to the App and try again',
        });
      }
    }
  };

  //是否是App打开
  const isAppOpen = ()=>{
    const ua = navigator.userAgent;
      const isPunch = ua.indexOf("Punch") > -1;
      if(!isPunch){
        setIsPunch(false)
      }
    
  }

  useEffect(() => {
    getUrlQuery();
    isAppOpen()
  }, []);
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
          <div className={styles.textBlock}>Choose a cryptocurrency</div>
          <div className={styles.currencyLineBlock}>
            <div>
              {currencyList.map((item, index) => {
                return (
                  <>
                    <div
                      onClick={() => {
                        changeType(index + 1, item);
                      }}
                      className={`${styles.currencyLine}   ${
                        currencyType === index + 1
                          ? styles.currencyLineActive
                          : ""
                      }`}
                    >
                      <div className={styles.left}>
                        <div className={styles.icon}>
                          <img
                            className={styles.iconImg}
                            src={item.icon}
                            alt=""
                          ></img>
                        </div>
                        <div className={styles.name}>{item.fullName}</div>
                      </div>
                      <div className={styles.right}>
                        <div className={styles.simpleName}>{item.name}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
