import React, { Component, useEffect, useState } from "react";
import axios from 'axios';
import { string } from "prop-types";
import API from "../lib/Api";
import { withRouter, RouteComponentProps } from "react-router";


type Response = {
    success?: boolean;
    data?: any;
    formData: any;
};


function selectComic(comics: any, search: string) {

    const selectedComic = comics.map((comic: any) => {
        if (comic.results.title.toLowerCase().includes(search.toLowerCase())
        ) {
            return (
                <div>
                    <h3> {comic.results.title} </h3>
                    <p>
                        {comic.results.description}
                    </p>

                </div>

            )
        }


    });
    return selectedComic;
}

type Props = RouteComponentProps<{}> & {
    classes: {
        root: string;
        toolbar: string;
    };
    search: string;

};

const GetComics = (props: Props) => {
    const [comic, setComic] = useState([]);
    const { classes, search } = props;
    useEffect(() => {
        const api = new API('');
        api.get("/comics").then(async (res: any) => {
            const q: Response = await res.json();
            setComic(q.data);
            console.log({ q });

        });
    });

    return (
        <main className={props.classes.root}>
            <div className={props.classes.toolbar}>
                {selectComic(comic, search)}
            </div>
        </main>
    );
}

export default GetComics;