import React, { Component } from "react";
import "../CSS/Home.css";

type Props = {
  comic: any;
};

export default class Characters extends Component<Props> {
  state = {
    showMoreInfo: false,
    checked: false
  };

  addToFavorites = (comicId: any, comicInfo: any) => {
    localStorage.setItem(comicId, JSON.stringify(comicInfo));
  };

  removeFromFavorites = (comicId: any) => {
    localStorage.removeItem(comicId);
  };

  onChecked = (comic: any) => {
    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked) {
        this.addToFavorites(comic.id, comic);
      } else {
        this.removeFromFavorites(comic.id);
      }
    });
  };

  onShowMoreInfo = () => {
    this.setState({ showMoreInfo: !this.state.showMoreInfo });
  };

  render() {
    const { comic } = this.props;
    const { showMoreInfo } = this.state;

    return (
      <div>
        <div key={comic.id}>
          <div className="card">
            <div className="container">
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt="Avatar"
              />
              <h4>{comic.name}</h4>

              <input
                id="checkbox"
                type="checkbox"
                className="checkbox"
                onChange={() => this.onChecked(comic)}
              />

              {!!showMoreInfo ? (
                <>
                  <p>{comic.description}</p>
                  <p>comics: {comic.comics.available} </p>
                  <p> series: {comic.series.available}</p>
                </>
              ) : null}
              <button onClick={this.onShowMoreInfo}> Ver mais..</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
