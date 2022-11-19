import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./boxingSlider.module.scss";
import "./boxingSlider.scss"




export default class BoxingSlider extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass:"slick-dots1",//自定义指示器的样式
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className={styles.block}>
        <Slider {...settings}>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}>
            <video
              className={`${styles.video}`}
              autoPlay
              loop
              muted
              src="./1mp4.mp4"
            ></video>
            </div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}>
            <video
              className={`${styles.video}`}
              autoPlay
              loop
              muted
              src="./2mp4.mp4"
            ></video>
            </div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}>
            <video
              className={`${styles.video}`}
              autoPlay
              loop
              muted
              src="./3mp4.mp4"
            ></video>
            </div>
          </div>
          <div className={styles.sliderItem}>
            <div className={styles.itemCard}>
            <video
              className={`${styles.video}`}
              autoPlay
              loop
              muted
              src="./2mp4.mp4"
            ></video>
            </div>
          </div>
       
         
          
        </Slider>
      </div>
    );
  }
}
