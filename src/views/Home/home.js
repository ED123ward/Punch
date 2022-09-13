import React, { Component } from "react";
import styles from "./home.module.scss";

import HomeWindow from "./components/HomeWindow/homeWindow";
import HomeMobile from "./components/HomeMobile/homeMobile";

export default class Home extends Component {
  render() {
    const ua = navigator.userAgent;

    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    const isMobile = isIphone || isAndroid;

    if (isMobile) {
      return <HomeMobile />;
    } else {
      return <HomeWindow />;
    }
  }
}
