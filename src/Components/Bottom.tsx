import React, { Component } from "react";
import './Bottom.css'

import { Link } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";


const myStyles = {
    //backgroundImage: "url(" + Background + ")",

    height: "60vh",
    backgroundSize: "cover",
    h1: "fontSize: 900%",
    backgroudColor: "#000000"
};


type Props = {

    button: any;
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


                <a href="#button" onClick={goComics}>{this.props.button}</a>
            </header>
        );
    }
}

export default Bottom;
