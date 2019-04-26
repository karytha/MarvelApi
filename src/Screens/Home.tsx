import React, { Component, useState } from "react";
import Header from "../Components/Header";
import "../CSS/Home.css";
import Bottom from "../Components/Bottom";
import Characters from "../Components/Characters";

export default class Home extends Component {
  state = {
    comics: [],
    search: " ",
    Open: false,
    favorited: false
  };

  async fetchCharacters(search: string) {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=229d8edde9c1cde400c427df49959956&hash=9bf04075fdccf819051d6fc49e30ff58`
    );
    const responseJson = await response.json();
    this.setState({ comics: responseJson.data.results });
  }

  updateSearch = (e: any) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
    // debounce(this.fetchCharacters(this.state.search));
    this.fetchCharacters(this.state.search);
  };

  render() {
    const { comics } = this.state;

    return (
      <div>
        <Header title="marvel" button="veja mais" />

        <input
          type="text"
          className="text"
          placeholder="Por qual herói você procura?"
          onChange={this.updateSearch}
        />

        <div className="body">
          {comics.map(comic => {
            return <Characters comic={comic} />;
          })}
        </div>
        <Bottom title="MARVEL" />
      </div>
    );
  }
}

// function debounce(func: () => void, wait = 50) {
//   let h: any;
//   return () => {
//     clearTimeout(h);
//     h = setTimeout(() => func(), wait);
//   };
// }
