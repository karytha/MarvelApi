import React, { useState, useEffect } from "react";
import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";
import { InputBase, createStyles, Theme } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";



function setComics(history: any) {

    history.push("/comics");

}
const Search = (props: any) => {
    const { context, classes } = props;

    return (


        <div className="search">

            <InputBase
                placeholder="Who hero are you looking for?"
                onChange={context.update}
                classes={{
                    root: "wrap",
                    input: "searchTerm"
                }}
            />

        </div>


    );

}

export default Search;



// // const Search = () => {
// //     return (
// <div className="wrap">
//     <div className="search">
//         <input type="text" className="searchTerm" placeholder="Who hero are you looking for?" />
// //                 <Button type="submit" onClick={() => setComics(history)}>
// //                     <i className="fa fa-search"></i>
// //                 </Button>
// //             </div>
// //         </div>
// //     );

// }

