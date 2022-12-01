import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./homeMobile.module.scss";

import { ScrollPercentage } from "react-scroll-percentage";

import LogoText from "../../../../assets/home/logoText.png";
import Button from "../../../../assets/home/button.png";
import DayUnit from "../../../../assets/home/Days.png";
import HoursUnit from "../../../../assets/home/Hours.png";
import MinutesUnit from "../../../../assets/home/Minutes.png";
import SecondsUnit from "../../../../assets/home/Seconds.png";

import HeadPortrait1 from "../../../../assets/home/Mask group1.png";
import HeadPortrait2 from "../../../../assets/home/Mask group2.png";
import HeadPortrait3 from "../../../../assets/home/Mask group3.png";
import HeadPortrait4 from "../../../../assets/home/Mask group4.png";

export default class HomeMobileAn extends Component {
  state = {
    isshow: false,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
    v1: "video1",
    v2: "video2",
    startStatu: false,
    showTitleActive: false,
    showContentActive: false,
    showBallActive: false,
  };

  goWeb = () => {
    const url = "https://forms.gle/jkNPfDQPxtYqzcFf8";
    window.open(url);
  };
  goPDF = () => {
    const url = "./Punch Games TOS.pdf";
    window.open(url);
  };

  swiperAnimation = () => {
    this.setState({
      isshow: true,
    });
  };

  showTime = () => {
    let nowTime = new Date(); //获取当前时间
    let setTime = new Date("2022/11/30"); //设置结束时间

    let remianAllSeconds = Math.floor(
      (setTime.getTime() - nowTime.getTime()) / 1000
    );

    //剩余总秒数
    let remainDays = Math.floor(remianAllSeconds / (60 * 60 * 24)); //剩余天数
    if (remainDays < 10) {
      remainDays = "0" + remainDays;
    }
    let remainHours = Math.floor((remianAllSeconds / (60 * 60)) % 24); //剩余小时数
    if (remainHours < 10) {
      remainHours = "0" + remainHours;
    }
    let remainMinutes = Math.floor((remianAllSeconds / 60) % 60); //剩余分钟数
    if (remainMinutes < 10) {
      remainMinutes = "0" + remainMinutes;
    }
    let remainSeconds = Math.floor(remianAllSeconds % 60); //剩余秒数
    if (remainSeconds < 10) {
      remainSeconds = "0" + remainSeconds;
    }
    let str = `${remainDays}:${remainHours}:${remainMinutes}:${remainSeconds}`;
    this.setState({
      Days: remainDays,
      Hours: remainHours,
      Minutes: remainMinutes,
      Seconds: remainSeconds,
    });
  };

  // 监听
  watchVideo = () => {
    var elevideo = document.getElementById("video1");
    elevideo.addEventListener(
      "ended",
      () => {
        this.swiperAnimation();
      },
      false
    );
  };

  componentDidMount() {
    this.watchVideo();
    setInterval(() => {
      this.showTime();
    }, 1000);
  }

  goAgreement = () => {
    window.location.href = "/#/agreement?type=all";
  };
  playV2 = () => {
    var elevideo = document.getElementById("video2");
    elevideo.play();
  };

  render() {
    return (
      <div className={styles.home_page}>
        <div className={styles.headBlock}>
          <div className={styles.video_block}>
            <video
              className={`${styles.video} ${
                this.state.isshow ? styles.show : styles.hidden
              }`}
              autoPlay
              preload="auto"
              controlsList="nodownload"
              loop="loop"
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="./loopMobile.mp4"
                type="video/mp4"
                data-wf-ignore="true"
              />
              您的浏览器不支持 video 标签。
            </video>

            <video
              id={this.state.v1}
              className={`${styles.video} ${
                !this.state.isshow ? styles.show : styles.hidden
              }`}
              autoPlay
              preload="auto"
              controlsList="nodownload"
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="./startMobile.mp4"
                type="video/mp4"
                data-wf-ignore="true"
              />
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <div className={styles.logoBlock}>
            <img src={LogoText} />
          </div>
          <div className={styles.timeBlock}>
            <div className={styles.timeDown}>
            <div>ALPHA IS HERE</div>
              {/* <div className={styles.timeText}>{this.state.Days}</div>
              <div className={`${styles.fontFamily}`}>:</div>
              <div className={styles.timeText}>{this.state.Hours}</div>
              <div className={`${styles.fontFamily}`}>:</div>
              <div className={styles.timeText}>{this.state.Minutes}</div>
              <div className={`${styles.fontFamily}`}>:</div>
              <div className={styles.timeText}>{this.state.Seconds}</div> */}
            </div>
            {/* <div className={styles.timeUnit}>
              <img src={DayUnit}></img>
              <img src={HoursUnit} />
              <img src={MinutesUnit} />
              <img src={SecondsUnit} />
            </div> */}
          </div>
          <div
            onClick={() => {
              this.goWeb();
            }}
            className={styles.buttonBlock}
          >
            <img src={Button} />
          </div>
          <div className={styles.termsBlock}>
            <Link className={`${styles.link}`} to={`/agreement/${"type"}`}>
              {" "}
              Terms & Conditions of Service
            </Link>
          </div>
        </div>
        <div className={styles.boxingBlock}>
          <div className={styles.video_block}>
            <video
              id={this.state.v2}
              className={`${styles.video}`}
              preload="auto"
              controlsList="nodownload"
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="./boxingMobile.mp4"
                type="video/mp4"
                data-wf-ignore="true"
              />
              您的浏览器不支持 video 标签。
            </video>
          </div>
          <ScrollPercentage
            as="div"
            onChange={(percentage, entry) => {
              console.log(percentage);
              if (percentage > 0.2) {
                this.setState({
                  showTitleActive: true,
                });
              }
              if (percentage > 0.5 && !this.state.startStatu) {
                this.setState({
                  startStatu: true,
                });
                this.playV2();
              }
              if (percentage > 0.7) {
                this.setState({
                  showContentActive: true,
                });
              }
              if (percentage === 0) {
                this.setState({
                  startStatu: false,
                  showTitleActive: false,
                  showContentActive: false,
                });
              }
            }}
          >
            <div
              className={`${styles.boxingTitle} ${
                this.state.showTitleActive ? styles.showTitleAnimation : ""
              } `}
            >
              Next Gen Web 3.0 Gaming Platform
            </div>
          </ScrollPercentage>
          <div
            className={`${styles.boxingText} ${
              this.state.showContentActive ? styles.showContentAnimation : ""
            }`}
          >
            <div className={styles.boxingContentTitle}>Discover our games</div>

            <div className={styles.boxingContentText}>
              Our portfolio of hyper-casual and casual games has over 6 billion
              downloads and entertain over 300 million people per month.
            </div>
          </div>
        </div>
        <div className={styles.ballBlock}>
          <div className={styles.video_block}>
            <video
              className={`${styles.video}`}
              autoPlay
              preload="auto"
              controlsList="nodownload"
              loop="loop"
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="./balloonVideo.mp4"
                type="video/mp4"
                data-wf-ignore="true"
              />
              您的浏览器不支持 video 标签。
            </video>
            <ScrollPercentage
              as="div"
              onChange={(percentage, entry) => {
                console.log(percentage);
                if (percentage > 0.3) {
                  this.setState({
                    showBallActive: true,
                  });
                }
                if (percentage === 0) {
                  this.setState({
                    showBallActive: false,
                  });
                }
              }}
            >
              <div className={`${styles.cardsBlock} ${this.state.showBallActive?styles.balloonCardBlockActive +
                    " animate__animated animate__zoomIn":''}`}>
                <div className={styles.cardItem}>
                  <img className={styles.headImg} src={HeadPortrait1} />
                  <div className={styles.name}>Boxi Wang</div>
                  <div className={styles.position}>Chief Executive Officer</div>
                </div>
                <div className={styles.cardItem}>
                  <img className={styles.headImg} src={HeadPortrait2} />
                  <div className={styles.name}>Oren Bennett</div>
                  <div className={styles.position}>Chief Business Officer</div>
                </div>
                <div className={styles.cardItem}>
                  <img className={styles.headImg} src={HeadPortrait3} />
                  <div className={styles.name}>William Ni</div>
                  <div className={styles.position}>
                    Chief Technology Officer
                  </div>
                </div>
                <div className={styles.cardItem}>
                  <img className={styles.headImg} src={HeadPortrait4} />
                  <div className={styles.name}>Danni Hu</div>
                  <div className={styles.position}>Chief Marketing Officer</div>
                </div>
              </div>
            </ScrollPercentage>
          </div>
        </div>
      </div>
    );
  }
}
