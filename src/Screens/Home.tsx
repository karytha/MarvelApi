import React, { Component } from "react";
import Header from "../Components/Header";
import "./Home.css"
import Bottom from "../Components/Bottom";
import Background from "../Images/background.jpg";

const myStyles = {
    backgroundImage: "url(" + Background + ")",
    height: "100vh",
    backgroundSize: "cover"
};

function orgComics(
    comics: any
) {

    const organComics = comics.map((comic: any) => {
        return (
            <div key={comic.id}>
                <div className="card" >
                    <div className="container">
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Avatar" />
                        <h4>{comic.name}</h4>
                        <p>{comic.description}</p>
                    </div>

                </div>
            </div>
        )
    }
    );
    return organComics;
}


export default class Home extends Component {


    state = {
        data: [],
        search: " ",


    }


    async fetchCharacters(search: any) {

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=229d8edde9c1cde400c427df49959956&hash=9bf04075fdccf819051d6fc49e30ff58`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
        // console.log(hash);
    }


    updateSearch = (e: any) => {
        console.log(e.target.value);
        this.setState({ search: e.target.value })
        this.fetchCharacters(this.state.search)

    };


    render() {
        const { data } = this.state;


        return (
            <div>
                <Header title="marvel" button="veja mais" />

                <input type="text" placeholder="Por qual herói você procura?" onChange={this.updateSearch}></input>

                <body className="body">
                    {orgComics(data)}
                </body>
                <Bottom title="MARVEL" />

            </div>
        )
    }
}
