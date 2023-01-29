import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import styles from "./pc.module.scss";
import { Slider } from "antd";

import Background from "../../../../assets/userLogin/background.png";
import Logo from "../../../../assets/userLogin/logoText.png";
import BottomArrow from "../../../../assets/userLogin/bottomArrow.png";
import MiddleArrow from "../../../../assets/userLogin/middleArrow.png";

import {
  getCurrencyList,
  getCurrencyBalance,
  getCurrencyConfig,
} from "../../../../api/user";

export const PC = () => {
  const state = useLocation();
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

  const [thresholdValue, setThresholdValue] = useState();

  const changeType = (item) => {
    setTimeout(() => {
      setCurrencyType(item.currency);
      setShowChange("hide");
      setCurrencyTypeName(item.name);
    }, 100);

    getExchangeNum(item.currency);
  };

  const getCurrencyInfo = async () => {
    let data = await getCurrencyList();
    setCurrencyList(data.data);
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
    setShowChange("show");
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
    setSliderTotle(data.data.balance);
  };

  useEffect(() => {
    getCurrencyInfo();
    getExchangeNum(currencyType);
    getCurrencyConfigData();
    getVoucher();
  }, []);
  return (
    <>
      <div className={styles.page}>

        <div className={styles.headBlock}>
          <div className={styles.logoBlock}>
            <img className={styles.logo} src={Logo}></img>
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
                <div className={styles.middelLine}></div>
                <div className={styles.middeImg}>
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

        {sliderTotle <= thresholdValue ? (
          <div className={styles.showText}>
            You need to have at least {thresholdValue} Punch Points to cash out.
          </div>
        ) : (
          <div className={styles.showText}>CONVERSION RATE MAY VARY.</div>
        )}
      </div>
    </>
  );
};
