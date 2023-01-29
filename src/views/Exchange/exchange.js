import React, { Component } from "react";
import styles from "./exchange.module.scss";

import { PC } from "./compoments/Pc/pc";
import { Mobile } from "./compoments/Mobile/mobile";

export default class Exchange extends Component {
  render() {
    const ua = navigator.userAgent;

    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    const isMobile = isIphone || isAndroid;
    if (isMobile) {
      return <Mobile />;
    } else {
      return <PC />;
    }
  }
}
