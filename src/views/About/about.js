import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function About(props) {
  const [name, setName] = useState("liuhan");

  useEffect(() => {
    showMess();
  });

  const params = useParams();

  const showMess = () => {
    console.log("name");
    console.log(props)
    console.log(params)
  };

  return <div>About</div>;
}
