import React, { Component } from "react";
import Background from "../Images/Marvel2.jpg";
import "../CSS/Header.css";


const myStyles = {
  backgroundImage: "url(" + Background + ")",
  height: "25vh",
  backgroundSize: "cover"
};

type Props = {
  title: string;
  button: any;
};

class Header extends Component<Props> {
  render() {
    return (
      <header style={myStyles}>

      </header>
    );
  }
}

export default Header;
