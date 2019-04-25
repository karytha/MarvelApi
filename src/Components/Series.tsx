import React, { Component, useState, useEffect, Props } from "react";
import Header from "./Header";
import "../Screens/Home.css"

type Response = {
    data?: any;
    formData: any;
};

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


const Series = () => {
    // const [series, setSeries] = useState([]);

    // fetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a233e73069d922e3f3fef91f60b113bf&hash=732769b6e7edd45d92894d2ee2426abc").then(async (res: any) => {
    //     const series: Response = await res.json();
    //     setSeries(series.data.results);
    //     console.log({ series });
    // }
    // ), [];

    return (

        <div>
            <Header title="marvel" button="veja mais" />
            <h2>COMICS</h2>
            {/* <body className="body">
                {orgComics(series)}
            </body> */}


        </div>

    )

}

