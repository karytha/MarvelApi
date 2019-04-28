import React, { Component } from "react";
import "../CSS/Home.css";

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
  // porque os dois contêm os mesmos elementos com os mesmos tipos
}

type Props = {
  comic: Comic;
};

export default class Characters extends Component<Props> {
  state = {
    showMoreInfo: false,
    checked: false
  };

  addToFavorites = (comicId: string, comicInfo: any) => {
    localStorage.setItem(comicId, JSON.stringify(comicInfo));
  };

  removeFromFavorites = (comicId: string) => {
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
              <label className="container-input">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="checkbox"
                  onChange={() => this.onChecked(comic)}
                />
                <span className="checkmark" />
              </label>
              {!!showMoreInfo ? (
                <>
                  <p>{comic.description}</p>
                  <div className="row">
                    <span className="box1">
                      {comic.comics.available <= 1
                        ? comic.comics.available + " " + "comic"
                        : comic.comics.available + " " + "comics"}
                    </span>
                    <span className="box2">
                      {comic.series.available <= 1
                        ? comic.series.available + " " + "serie"
                        : comic.series.available + " " + "series"}
                    </span>
                  </div>
                </>
              ) : null}
              <button onClick={this.onShowMoreInfo}>
                {" "}
                {!!this.state.showMoreInfo ? "Hide" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
