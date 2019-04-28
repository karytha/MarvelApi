import React, { Component } from "react";
import Header from "../Components/Header";
import "../CSS/Home.css";
import Bottom from "../Components/Bottom";
import Characters from "../Components/Characters";
import { any } from "prop-types";

interface Thumbnail {
  path: string;
  extension: string;
}

interface Series {
  available: number;
  collectionURI: any;
  items: any;
  returned: number;
}

interface Stories {
  resourceURL: any;
  name: string;
  type: any;
}
interface Comic {
  id: string;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  modified: string;
  events: any;
  resourceURL: any;
  stories: Stories;
  series: Series;
  comics: Series; //coloquei o mesmo tipo de interface que Series,
  // porque os dois cont�m os mesmos elementos com os mesmos tipos
}

export default class Home extends Component {
  state = {
    comics: [],
    search: " ",
    favorite: false
  };

  async fetchCharacters(search: string) {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=229d8edde9c1cde400c427df49959956&hash=9bf04075fdccf819051d6fc49e30ff58`
    );
    const responseJson = await response.json();

    const results = responseJson.data ? responseJson.data.results : [];
    this.setState({ comics: results });
  }

  updateSearch = (e: any) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
    this.fetchCharacters(this.state.search);
  };

  // getFavorites = (comic: any) => {
  //   const comicLocal = JSON.parse(localStorage.getItem(comic.id) || "{}");
  //   {
  //     comicLocal.map((comic: any) => {
  //       <div key={comic.id}>
  //         <p>{comic.name}</p>
  //       </div>;
  //     });
  //   }
  //   console.log(comicLocal);
  // };

  // onChangeFavorites = (comic: any) => {
  //   this.setState({ favorite: !this.state.favorite });
  //   !!this.state.favorite ? this.getFavorites(comic.id) : null;
  //   console.log(this.getFavorites(comic.id));
  // };

  render() {
    const { comics } = this.state;
    const { favorite } = this.state;

    return (
      <div>
        <Header title="marvel" />

        <input
          type="text"
          className="text"
          placeholder="Which hero do you look for?"
          onChange={this.updateSearch}
        />

        <div className="body">
          {comics.map(comic => {
            return <Characters comic={comic} />;
          })}
        </div>
        {/* <button onClick={this.onChangeFavorites} />
        {!!favorite ? this.getFavorites(comics) : null} */}
        <Bottom title="MARVEL" />
      </div>
    );
  }
}
