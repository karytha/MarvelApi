import React, { Component, useState } from "react";
import Header from "../Components/Header";
import "../CSS/Home.css";
import Bottom from "../Components/Bottom";
import Background from "../Images/background.jpg";
import Characters from "../Components/Characters"

const myStyles = {
    backgroundImage: "url(" + Background + ")",
    height: "100vh",
    backgroundSize: "cover"
};

export default class Home extends Component {


    state = {
        comics: [],
        search: " ",
        Open: false,
        favorited: false
    }


    async fetchCharacters(search: any) {

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=229d8edde9c1cde400c427df49959956&hash=9bf04075fdccf819051d6fc49e30ff58`)
        const responseJson = await response.json()
        this.setState({ comics: responseJson.data.results })
        // console.log(hash);
    }


    updateSearch = (e: any) => {
        console.log(e.target.value);
        this.setState({ search: e.target.value })
        this.fetchCharacters(this.state.search)

    };


    render() {
        const { comics } = this.state;
        const { favorited } = this.state;
        const { Open } = this.state;

        return (
            <div>
                <Header title="marvel" button="veja mais" />

                <input type="text" placeholder="Por qual herói você procura?" onChange={this.updateSearch}></input>

                <body className="body">
                    {comics.map(comic => {
                        return (
                            <Characters comic={comic} />)
                    })}
                </body>
                <Bottom title="MARVEL" />

            </div>
        )
    }
}
