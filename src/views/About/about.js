import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./about.module.scss";

import { ScrollPercentage } from "react-scroll-percentage";

export default function About(props) {
  const [name, setName] = useState("liuhan");

  useEffect(() => {
    showMess();
  },[]);

  const params = useParams();

  const showMess = () => {
    console.log("name");
    console.log(props);
    console.log(params);
  };

  return (
    <>
      <div className={styles.block}>1</div>
      <ScrollPercentage
        as="div"
        onChange={(percentage, entry) => console.log("Percentage:", percentage)}
      >
        <h2>
          Plain children are always rendered. Use onChange to monitor state.
        </h2>
      </ScrollPercentage>
      <div className={styles.block}>1</div>
    </>
  );
}
