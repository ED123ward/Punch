import PropTypes from "prop-types";
import React, { Component } from "react";

import HomeMobileAn from "./homeMobileAn";
import HomeMobileIos from "./homeMobileIos";

export default class HomeMobile extends Component {
  render() {
    const ua = navigator.userAgent;

    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/);
    const isMobile = isIphone || isAndroid;

    if (isAndroid) {
      return <HomeMobileAn />;
    } else {
      return <HomeMobileIos />;
    }
  }
}
