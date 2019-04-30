import React, { Component } from "react";
import "../CSS/Bottom.css";
import Marvel from "../Images/Marvel.png";

const myStyles = {
  height: "25vh",
  backgroundSize: "cover",
  backgroudColor: "#000000"
};

class Bottom extends Component {
  render() {
    return (
      <div className="header" style={myStyles}>
        <img src={Marvel} />
      </div>
    );
  }
}

export default Bottom;
