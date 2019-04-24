import React, { Component } from "react";
import './Bottom.css'

import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";


const myStyles = {
    //backgroundImage: "url(" + Background + ")",

    height: "25vh",
    backgroundSize: "cover",
    h1: "fontSize: 900%",
    backgroudColor: "#000000"
};

type Props = {
    title: string;
};

function goComics() {
    <Link to="/comics">{'Comics'}</Link>
}
class Bottom extends Component<Props> {
    render() {
        return (
            <header style={myStyles}>
                {/* <input type="text" placeholder="Search.." name="search"></input>
        <button type="submit" ><i className="fa fa-search" ></i></button> */}

                <h1> {this.props.title}</h1>
                {/* <a href="#button" onClick={goComics}>{this.props.button}</a> */}
            </header>
        );
    }
}

export default Bottom;
