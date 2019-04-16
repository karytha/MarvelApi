import React, { Component } from "react";
import Background from "../Images/Marvel2.jpg";
import "./Header.css";
import "bulma/css/bulma.css";
import { checkPropTypes } from "prop-types";
import Search from "./Search";

const myStyles = {
  backgroundImage: "url(" + Background + ")",
  //height: "20vh",
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
        <Search />
        {/* <h1> {this.props.title}</h1>
        <p>Engenheira da Computação</p> */}
        {/* <a href="#button">{this.props.button}</a>  */}
      </header>
    );
  }
}

export default Header;
