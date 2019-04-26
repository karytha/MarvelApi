import React, { Component } from "react";
import "../CSS/Home.css";


type Props = {
    comic: any;
}

export default class Characters extends Component<Props>{

    state = {
        showMoreInfo: false,
        checked: false
    }


    onShowMoreInfo = () => {
        this.setState({ showMoreInfo: !this.state.showMoreInfo });
    };

    onChecked = () => {
        this.setState({ checked: this.state.checked })

        console.log(this.state.checked)
    }


    render() {

        const { comic } = this.props;
        const { showMoreInfo } = this.state;

        return (
            <div>
                <div key={comic.id}>
                    <div className="card" >
                        <div className="container">
                            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="Avatar" />
                            <h4>{comic.name}</h4>
                            <input id="checkbox" type="checkbox" className="checkbox" onChange={this.onChecked} />

                            {showMoreInfo === true ? (
                                <>
                                    <p>{comic.description}</p>
                                    <p>{comic.modified}</p>
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
};
