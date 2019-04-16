import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Marvel" button="Veja mais" />
        <Body title="MARVEL" />
        <Header title="marvel2" button="oito" />
      </div>
    );
  }
}

export default App;
