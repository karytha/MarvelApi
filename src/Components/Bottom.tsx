import React, { Component } from "react";
import '../CSS/Bottom.css'




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

class Bottom extends Component<Props> {
    render() {
        return (
            <header style={myStyles}>

                <h1> {this.props.title}</h1>

            </header>
        );
    }
}

export default Bottom;
