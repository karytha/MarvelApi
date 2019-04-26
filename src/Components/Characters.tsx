import React, { Component } from "react";
import "../CSS/Home.css";


type Props = {
    comic: any;
}

export default class Characters extends Component<Props>{

    state = {
        showMoreInfo: false
    }


    onShowMoreInfo = () => {
        this.setState({ showMoreInfo: !this.state.showMoreInfo });
    };

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
                            <p>{comic.description}</p>

                            <button key={comic.id} onClick={this.onShowMoreInfo}> Ver mais..</button>
                            {showMoreInfo === true ? (
                                <p>{comic.modified}</p>
                            ) : null}
                        </div>
                    </div>

                </div>
            </div>
        );

    }
};
