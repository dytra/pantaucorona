import React from "react";
import "./Alert.scss";
const Alert = ({text,icon,type}) => {
  return(
    <div className="alert">{text}</div>
  )
}

export default Alert;