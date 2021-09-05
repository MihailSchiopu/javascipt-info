import React from "react";
import style from "./body-style.module.css";

const Body = (props) => {
  return <div className={style.cardContainer}>{props.children}</div>;
};

export default Body;
