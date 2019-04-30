import React, { Component } from "react";
import Header from "../Components/Header";
import "../CSS/Home.css";
import Bottom from "../Components/Bottom";
import Characters from "../Components/Characters";

export default class Home extends Component {
  state = {
    comics: [],
    search: " "
  };

  async fetchCharacters(search: string) {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=229d8edde9c1cde400c427df49959956&hash=9bf04075fdccf819051d6fc49e30ff58`
    );
    const responseJson = await response.json();

    const results = responseJson.data ? responseJson.data.results : [];
    this.setState({ comics: results });
  }

  updateSearch = (e: React.FormEvent<EventTarget>): void => {
    const target = e.target as HTMLInputElement;
    this.setState({ search: target.value });
    this.fetchCharacters(this.state.search);
  };

  render() {
    const { comics } = this.state;

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

        <Bottom />
      </div>
    );
  }
}
