import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    v1: "video1",
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
    let setTime = new Date("2022/10/23"); //设置结束时间

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
    console.log(elevideo);
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
    // this.init();
    setInterval(() => {
      this.showTime();
    }, 1000);
  }

  init() {
    this.initData();
    this.initImages();
    this.handleResize();
    this.bindEvents();
  }

  initData() {
    this.canvas2 = document.getElementById("02-head-bob-turn");
    this.context = this.canvas2.getContext("2d");
    this.MAX_LEN = 85;
    this.imgs = [];
    this.start = 1;
    this.oldStart = -1;
    this.addN = 1;
    this.interval = 10; // 控制刷新率
    this.leftY = 0;
    this.curScrollY = this.getScrollTop();
    this.startPos = this.curScrollY;
    this.lastPos = this.curScrollY;
    this.isStop = false;
  }

  initImages() {
    for (let i = 0; i < this.MAX_LEN; i++) {
      const img = new Image();
      // img.onload = () => this.imgs[i] = img
      img.src = this.getImage(i);
      // 不管加载否 保证顺序
      this.imgs.push(img);
    }
  }

  bindEvents() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleScroll);
  }

  getScrollTop() {
    return window.scrollY || 0;
  }

  getImage(num) {
    // const srcDir =
    //   "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/";
    // const imgSuffix = ".jpg";
     const srcDir =
      "./knuckles/";
    const imgSuffix = ".png";
    console.assert(Number.isInteger(num) && num > -1 && num < this.MAX_LEN);
    const t = ("" + num).padStart(4, "0");
    return srcDir + t + imgSuffix;
  }

  isOver() {
    return this.start < 0 || this.start > this.MAX_LEN - 1;
  }

  handleScroll = () => {
    const scrollY = this.getScrollTop();
    let delta = scrollY - this.curScrollY;
    const isDown = delta > 0;

    delta = Math.abs(delta) + this.leftY;
    this.curScrollY = scrollY;

    if (
      this.isStop &&
      isDown === this.needDown &&
      ((isDown && this.curScrollY > this.lastPos) ||
        (!isDown && this.curScrollY < this.lastPos))
    ) {
      this.isStop = false;
    }
    if (this.isStop) return;

    // good idea: 补偿
    const alpha = Math.floor(delta / this.interval) * this.addN || 0;
    this.leftY = delta % this.interval;

    isDown ? (this.start += alpha) : (this.start -= alpha);
    if (this.isOver() && !this.isStop) {
      // this.lastPos = scrollY
      this.isStop = true;
      console.log(this.start, scrollY, this.lastPos);

      // TODO: 多个 canvas 用 opacity 切换
      // this.canvas2.style.cssText = `opacity: 0;`
    }

    if (this.start < 0) this.start = 0;
    if (this.start > this.MAX_LEN - 1) this.start = this.MAX_LEN - 1;
    if (this.startPos >= scrollY) this.start = 0;
    if (this.oldStart === this.start) return;
    this.oldStart = this.start;
    // good idea：记录
    this.lastPos = scrollY;
    this.needDown = !isDown;

    this.drawCanvas(this.start);
  }

  handleResize = () => {
    const wScale = window.innerWidth / (this.canvas2.width || 1458);
    const hScale = (window.innerHeight - 52) / (this.canvas2.height || 1458);

    this.canvas2.style.transform = `matrix(${wScale}, 0, 0, ${hScale}, 0, 0)`;
  }

  drawCanvas(sequence) {
    this.canvas2 = document.getElementById("02-head-bob-turn");
    this.context = this.canvas2.getContext("2d");

    // 当前序列帧
    const imgTemp = this.imgs[sequence];
    const canvas = this.canvas2;
 
    canvas.width = imgTemp.width;
    canvas.height = imgTemp.height;

    this.context.drawImage(imgTemp, 0, 0);
  }

  goAgreement = ()=>{
   window.location.href = '/#/agreement?type=all'
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
  }


  render() {
    return (
      <div className={styles.home_page}>
         {/* <img src="./knuckles/1.png" /> */}
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
          <div
            className={`${styles.logoBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            }`}
          >
            <img src={LogoText} />
          </div>
          <div
            className={`${styles.timeBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            }`}
          >
            <div className={styles.timeDown}>
              <div className={styles.timeText}>{this.state.Days}</div>
              <div className={styles.fontFamily}>:</div>
              <div className={styles.timeText}>{this.state.Hours}</div>
              <div className={styles.fontFamily}>:</div>
              <div className={styles.timeText}>{this.state.Minutes}</div>
              <div className={styles.fontFamily}>:</div>
              <div className={styles.timeText}>{this.state.Seconds}</div>
            </div>
            <div className={styles.timeUnit}>
              <img src={DayUnit}></img>
              <img src={HoursUnit} />
              <img src={MinutesUnit} />
              <img src={SecondsUnit} />
            </div>
          </div>
          <div
            onClick={() => {
              this.goWeb();
            }}
            className={`${styles.buttonBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            }`}
          >
            <img src={Button} />
          </div>
          {/* <div
            className={`${styles.termsBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            } `}
            onClick={() => {
              this.goAgreement();
            }}
          >
            Terms & Conditions of Service
          </div> */}
          <div  className={`${styles.termsBlock} ${
              this.state.isshow ? styles.anmationShow : ""
            } `}>
          <Link
           className={`${styles.link}`}
          to={`/agreement?type=all`}
          >
            Terms & Conditions of Service
          </Link>
          </div>
        </div>
       
        {/* <div className={`${styles.bodyBlock}`}>
          <canvas id="02-head-bob-turn" width="1200" height="2000"></canvas>
        </div> */}
      </div>
    );
  }



}
