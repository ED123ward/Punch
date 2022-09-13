import PropTypes from "prop-types";
import React, { Component } from "react";

import styles from "./homeWindow.module.scss";

import LogoText from "../../../../assets/home/logoText.png";
import Button from "../../../../assets/home/button.png";
import DayUnit from "../../../../assets/home/Days.png";
import HoursUnit from "../../../../assets/home/Hours.png";
import MinutesUnit from "../../../../assets/home/Minutes.png";
import SecondsUnit from "../../../../assets/home/Seconds.png";

export default class HomeWindow extends Component {
  state = {
    isshow: false,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
    v1:'video1'
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
    let setTime = new Date("2022/11/11"); //设置结束时间

    let remianAllSeconds = Math.floor(
      (setTime.getTime() - nowTime.getTime()) / 1000
    ); //剩余总秒数
    let remainDays = Math.floor(remianAllSeconds / (60 * 60 * 24)); //剩余天数
    if(remainDays < 10 ){
      remainDays = '0'+remainDays
    }
    let remainHours = Math.floor((remianAllSeconds / (60 * 60)) % 24); //剩余小时数
    if(remainHours < 10 ){
      remainHours = '0'+remainHours
    }
    let remainMinutes = Math.floor((remianAllSeconds / 60) % 60); //剩余分钟数
    if(remainMinutes < 10 ){
      remainMinutes = '0'+remainMinutes
    }
    let remainSeconds = Math.floor(remianAllSeconds % 60); //剩余秒数
    if(remainSeconds < 10 ){
      remainSeconds = '0'+remainSeconds
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
    console.log(elevideo)
    elevideo.addEventListener(
      "ended",
      () => {
        //结束
        console.log("播放结束");
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
              loop
              muted
              src="./loop.mp4"
            ></video>
            <video
            id={this.state.v1}
              className={`${styles.video}`}
              autoPlay
              muted
              src="./start.mp4"
            ></video>
          </div>
          <div className={`${styles.logoBlock} ${this.state.isshow ? styles.anmationShow : ''}`}>
            <img  src={LogoText} />
          </div>
          <div className={`${styles.timeBlock} ${this.state.isshow ? styles.anmationShow : ''}`}>
            <div className={styles.timeDown}>
              <div className={styles.timeText}>{this.state.Days}</div>
              <div className={styles.fontFamily} >:</div>
              <div className={styles.timeText}>{this.state.Hours}</div>
              <div className={styles.fontFamily} >:</div>
              <div className={styles.timeText}>{this.state.Minutes}</div>
              <div className={styles.fontFamily} >:</div>
              <div className={styles.timeText}>{this.state.Seconds}</div>
            </div>
            <div className={styles.timeUnit}>
              <img src={DayUnit}></img>
              <img src={HoursUnit} />
              <img src={MinutesUnit} />
              <img src={SecondsUnit} />
            </div>
          </div>
          <div  onClick={() => {
                  this.goWeb();
                }} className={`${styles.buttonBlock} ${this.state.isshow ? styles.anmationShow : ''}`}>
            <img src={Button} />
          </div>
          <div
          className={`${styles.termsBlock} ${this.state.isshow ? styles.anmationShow : ''} `}
            onClick={() => {
              this.goPDF();
            }}
          >
            Terms & Conditions of Service
          </div>
        </div>
      </div>
    );
  }
}
