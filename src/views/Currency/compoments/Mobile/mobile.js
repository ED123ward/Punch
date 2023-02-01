import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./mobile.module.scss";

import Background from "../../../../assets/userLogin/background.png";
import Logo from "../../../../assets/userLogin/logoText.png";
import SignOut from "../../../../assets/userLogin/signout.png"

import { getCurrencyList } from "../../../../api/user";

import { message } from 'antd';

export const Mobile = () => {
  const [currencyType, setCurrencyType] = useState();
  const [currencyList, setCurrencyList] = useState([]);

  const navigate = useNavigate();


  const changeType = (type,item) => {
    setCurrencyType(type);
    setTimeout(() => {
      goExchange(item)
    }, 1000);
  };
  const getCurrencyInfo = async () => {
    let data = await getCurrencyList();
    if(data.code === 200){
      setCurrencyList(data.data);
    }else{
      message.info(data.msg);
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    
  };
  const goExchange = async (item) => {
    navigate("/exchange",{ state: {currency:item.currency,currencyName:item.name} });
  };

  const signOut = async () =>{
    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  useEffect(() => {
    getCurrencyInfo();
  }, []);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.pageBackground}>
          <img className={styles.pageBackgroundImg} src={Background} />
        </div>

        <div className={styles.headBlock}>
          <div className={styles.logoBlock}>
            <img className={styles.logo} src={Logo}></img>
          </div>
          <div className={styles.signOutBlock}>
            <img onClick={signOut} className={styles.signOut} src={SignOut}></img>
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
                        changeType(index + 1,item);
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
