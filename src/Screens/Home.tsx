import React, { Component, useState } from "react";
import Header from "../Components/Header";
import "./Home.css"


function orgComics(
    comics: any
    //search: string
) {

    const organComics = comics.map((comic: any) => {
        return (
            <div key={comic.id}>
                <div className="card" >
                    <div className="container">
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Avatar" />

                        {/* <div className="container"> */}
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

    static navigationOptions = {
        title: 'Heroes'
    }

    state = {
        data: []
    }


    async componentDidMount() {

        // const timestamp = Number(new Date())
        // const hash = '732769b6e7edd45d92894d2ee2426abc'
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&orderBy=name&limit=10&apikey=a233e73069d922e3f3fef91f60b113bf&hash=732769b6e7edd45d92894d2ee2426abc`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
        console.log(this.state.data)
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <Header title="marvel" button="veja mais" />
                <h2>COMICS</h2>
                <body className="body">

                    {orgComics(data)}
                </body>


            </div>
        )
    }
}
