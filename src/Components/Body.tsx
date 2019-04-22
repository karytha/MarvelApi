import React, { Component } from "react";

import "./Body.css";


const myStyles = {
  //backgroundImage: "url(" + Background + ")",

  height: "60vh",
  backgroundSize: "cover",
  h1: "fontSize: 900%"
};



type Props = {
  title: string;
};

class Body extends Component<Props> {
  render() {
    return (
      <header className="body" style={myStyles}>
        {/* <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit" ><i className="fa fa-search" ></i></button> */}
        <div>
          <h1> {this.props.title}</h1>

        </div>

        {/* <a href="#button">{this.props.}</a> */}
      </header>
    );
  }
}

export default Body;
