import React, { Component, useState } from "react";
import Header from "../Components/Header";
import "./Home.css"
import Bottom from "../Components/Bottom";
import Background from "../Images/background.jpg";
import { Md5 } from 'ts-md5/dist/md5';


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
                    {/* </div> */}
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
        search: " "

    }


    async fetchCharacters(search: any) {

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=a233e73069d922e3f3fef91f60b113bf&hash=732769b6e7edd45d92894d2ee2426abc`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
        // console.log(hash);
    }


    updateSearch = (e: any) => {
        console.log(e.target.value);
        this.setState({ search: e.target.value }),
            () => {
                if (this.state.search && this.state.search.length > 1) {
                    if (this.state.search.length % 2 === 0) {
                        this.fetchCharacters(this.state.search);

                    }
                } else {
                    this.fetchCharacters(this.state.search);
                }
            }
    };


    render() {
        const { data } = this.state;


        return (
            <div>
                <Header title="marvel" button="veja mais" />

                <input type="text" placeholder="Por qual herói você procura?" onChange={this.updateSearch.bind(this.fetchCharacters(this.state.search))}></input>
                {/* <input type="text" placeholder="Por qual herói você procura?" onChange={this.updateSearch.bind(this.fetchCharacters(this.state.search)}></input> */}

                <body className="body">
                    {orgComics(data)}
                </body>
                <Bottom title="MARVEL" />

            </div>
        )
    }
}
