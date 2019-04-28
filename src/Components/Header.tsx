import React, { Component } from "react";

import "../CSS/Header.css";

const myStyles = {
  // backgroundImage: "url(" + Background + ")",
  height: "25vh",
  backgroundSize: "cover"
};

type Props = {
  title: string;
};

class Header extends Component<Props> {
  render() {
    return <header style={myStyles} />;
  }
}

export default Header;
