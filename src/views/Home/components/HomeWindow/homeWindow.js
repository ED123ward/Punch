import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

import SliderAutoPlay from "./slider";

import styles from "./homeWindow.module.scss";

import "animate.css";

import { ScrollPercentage } from "react-scroll-percentage";

import LogoText from "../../../../assets/home/logoText.png";
import Button from "../../../../assets/home/button.png";
import LeanMoreImg from "../../../../assets/home/leanMore.png"

import Next from "../../../../assets/home/Next Gen Web 3.0 Gaming Platform.png"
import Discover from "../../../../assets/home/Discover our games.png"

import HeadImg from "../../../../assets/home/headImg.png"
import UserLogin from "../../../../assets/home/userLogin.png";

import BoxingSlider from "./boxingSlider";

export default class HomeWindow extends Component {
  state = {
    isshow: false,
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
    v1: "video1",
    v2: "video2",
    v3: "video3",
    float: false,
    textYValue: null,
    textShow: false,
    balloonCardYValue: null,
    balloonCardShow: false,
    isScollerActive: false,
    rotatingActive: false,
    boxingTextShow:false,
    boxingCardsShow:false,
    startStatu:false
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
        //结束
        console.log("播放结束");
        this.swiperAnimation();
      },
      false
    );
  };

  goTop = () => {
    window.scrollTo(0, 0);
  };
  goCash = () =>{
    window.location.href = "/#/userlogin";
  }
  scrollPage = () =>{
    let height = document.body.clientHeight;
    window.scrollTo(0, height*0.03);
  }

  playV3 = () => {
    var elevideo = document.getElementById("video3");
    elevideo.play();
  };

  componentDidMount() {
    this.watchVideo();
    setInterval(() => {
      this.showTime();
    }, 1000);
    setTimeout(() => {
      this.goTop();
    }, 500);
  }

  render() {
    return (
      <div className={styles.home_page}>
        <div
          className={`${styles.headBlock}  ${
            this.state.float ? styles.headFloat : ""
          } ${this.state.isScollerActive ? styles.scrollThis : ""}`}
        >
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
            <video
              id={this.state.v2}
              className={`${styles.videoBoxing} ${
                this.state.rotatingActive ? styles.show : styles.hidden
              }`}
              autoPlay
              muted
              src="./boxingMobile.mp4"
            ></video>
          </div>
          <div
            className={`${styles.animationText} ${
              this.state.isshow ? styles.anmationShow : ""
            } ${this.state.rotatingActive ? styles.animationTop : ""}`}
          >
            <div className={`${styles.logoBlock}`}>
              <img
               className={styles.logoImg}
                onClick={() => {
                  this.goTop();
                }}
                src={LogoText}
                alt=""
              />
               <img
               className={styles.loginButton}
                onClick={() => {
                  this.goCash();
                }}
                src={UserLogin}
                alt=""
              />
            </div>

            <div className={`${styles.timeBlock} `}>
              <div className={styles.timeDown}>
                <div>  <img className={styles.headImgAStyle} src={HeadImg} /></div>
              
                {/* <div className={styles.timeText}>{this.state.Days}</div>
                <div className={styles.fontFamily}>:</div>
                <div className={styles.timeText}>{this.state.Hours}</div>
                <div className={styles.fontFamily}>:</div>
                <div className={styles.timeText}>{this.state.Minutes}</div>
                <div className={styles.fontFamily}>:</div>
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
                // this.goWeb();
                this.scrollPage()
              }}
              className={`${styles.buttonBlock} `}
            >
              <img src={Button} />
            </div>
            <div  onClick={() => {
                this.scrollPage()
              }}
              className={`${styles.leanMoreBlock} `}>
              <img src={LeanMoreImg} />
            </div>
          </div>

          <div className={`${styles.boxingContent}`}>
          <div className={` ${styles.logoBlocksecont} ${this.state.rotatingActive ? styles.animationLeft : ""}`  }>
              <img
                onClick={() => {
                  this.goTop();
                }}
                src={LogoText}
              />
            </div>
            <div
              className={`${styles.boxingText} ${
                this.state.rotatingActive ? styles.animationLeft : ""
              }`}
            >
             <img className={styles.next} src={Next} />
            </div>
            <ScrollPercentage
              as="div"
              onChange={(percentage, entry) => {
                console.log(percentage);
                if (percentage > 0.3) {
                  this.setState({
                    boxingTextShow: true,
                  });
                }
                if (percentage === 0) {
                  this.setState({
                    boxingTextShow: false,
                  });
                }
              }}
            >
              <div className={`${styles.disGameBlock} ${this.state.boxingTextShow?styles.boxingTextAn:''}`}>
                {/* <div className={styles.disGameTitle}>Discover our games</div>
                <div className={styles.disGameContent}>
                  Our portfolio of hyper-casual and casual games has over 6
                  billion downloads and entertain over 300 million people per
                  month.
                </div> */}
                <img className={styles.discover} src={Discover} />
                <div className={styles.disGameContent}>
                Our portfolio of hyper-casual and casual games includes puzzle, sports and action games, with more genres of games to come. Gamers of all demographics can find something they like!
                </div>
                
              </div>
            </ScrollPercentage>
            <ScrollPercentage
              as="div"
              onChange={(percentage, entry) => {
                if (percentage > 0.3) {
                  this.setState({
                    boxingCardsShow: true,
                  });
                }
                if (percentage === 0) {
                  this.setState({
                    boxingCardsShow: false,
                  });
                }
              }}
            >
              <div className={`${styles.disGameSwiper} ${this.state.boxingCardsShow?styles.boxingCardAn:''}`}>
                <BoxingSlider />
              </div>
            </ScrollPercentage>
          </div>
        </div>

        <ScrollPercentage
          as="div"
          onChange={(percentage, entry) => {
            if (percentage > 0.996984126984127) {
              this.setState({
                rotatingActive: true,
              });
            }
            if (percentage === 1) {
              this.setState({
                isScollerActive: true,
              });
            }
          }}
        >
          <div className={styles.bodyBlock1}></div>
        </ScrollPercentage>

        <div className={styles.bodyBlock2}></div>

        <div className={styles.balloonBlock} id={"balloon"}>
          <ScrollPercentage
            as="div"
            onChange={(percentage, entry) => {
              if (percentage > 0.42771577380952377 && !this.state.startStatu) {
                  this.setState({
                    startStatu: true,
                  });
                  this.playV3();
                
                this.setState({
                  balloonCardShow: true,
                });
              }
              if (percentage === 0) {
                this.setState({
                  balloonCardShow: false,
                  startStatu:false
                });
              }
            }}
          >
            <video
              id={this.state.v3}
              className={`${styles.balloonVideo}`}
              muted
              src="./balloonVideo.mp4"
            ></video>

            {/* <div
              className={`${styles.balloonCardBlock} ${
                this.state.balloonCardShow
                  ? styles.balloonCardBlockActive +
                    " animate__animated animate__zoomIn"
                  : ""
              }`}
            >
              <div className={styles.balloonCard}>
                <div className={styles.cardImg}>
                  <img className={styles.img} src={HeadPortrait1} />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.niName}>Boxi Wang</div>
                  <div className={styles.position}>Chief Executive Officer</div>
                </div>
              </div>
              <div className={styles.balloonCard}>
                <div className={styles.cardImg}>
                  <img className={styles.img} src={HeadPortrait2} />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.niName}>Oren Bennett</div>
                  <div className={styles.position}>Chief Business Officer</div>
                </div>
              </div>
              <div className={styles.balloonCard}>
                <div className={styles.cardImg}>
                  <img className={styles.img} src={HeadPortrait3} />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.niName}>William Ni</div>
                  <div className={styles.position}>
                    Chief Technology Officer
                  </div>
                </div>
              </div>
              <div className={styles.balloonCard}>
                <div className={styles.cardImg}>
                  <img className={styles.img} src={HeadPortrait4} />
                </div>
                <div className={styles.cardText}>
                  <div className={styles.niName}>Danni Hu</div>
                  <div className={styles.position}>Chief Marketing Officer</div>
                </div>
              </div>
            </div> */}
          </ScrollPercentage>
        </div>

        <div className={styles.friendBlock}>
          <div className={styles.friendVideo}>
            <video
              className={`${styles.video}`}
              autoPlay
              loop
              muted
              src="./friendVideo.mp4"
            ></video>
          </div>
          <ScrollPercentage
            as="div"
            onChange={(percentage, entry) => {
              if (percentage > 0.32771577380952377) {
                this.setState({
                  textShow: true,
                });
              }
              if (percentage === 0) {
                this.setState({
                  textShow: false,
                });
              }
            }}
          >
            <div
              className={`${styles.friendText} ${
                this.state.textShow
                  ? styles.myElement +
                    " animate__animated animate__fadeInLeftBig"
                  : ""
              } `}
            >
              Our Backer
            </div>
          </ScrollPercentage>
        </div>

        <div className={styles.swiperBlock}>
          <SliderAutoPlay />
        </div>

        <div className={styles.surpriseGift}>
          <video
            className={`${styles.boxVideo}`}
            autoPlay
            loop
            muted
            src="./box.mp4"
          ></video>
        </div>
        <div className={styles.bottomBlock}>
          <div className={styles.bottomLogo}>
            <img className={styles.bottomLogoImg} src={LogoText} />
          </div>
          <div className={styles.ActiveText}>
            <div className={styles.ActiveTextBox}>
              <div>Links</div>
              <div className={styles.text}>Terms</div>
              <div className={styles.text}>Privacy Policy</div>
            </div>
          </div>
          <Link className={`${styles.link}`} to={`/agreement/${"type"}`}>
            Terms & Conditions of Service
          </Link>
        </div>
      </div>
    );
  }
}
