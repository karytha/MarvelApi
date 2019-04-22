import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import getComics from "./Screens/Comics";
import Bottom from "./Components/Bottom";
import { Route, Router } from 'react-router';
import Link from 'react-router';
import Search from "./Components/Search";
import axios from 'axios'

type context = any;
class App extends React.Component {
  onSearchSubmit = (term: any) => {
    axios.get("http://api.unplash.com/search/photos", {
      method: "GET",
      params: { query: term },

      headers: {
        "Content-Type": "application/json",
        Authorization: 'Client-ID 0c53236c6591fca02f63cda43087e883fb155ad957eb48086f5d789967d05038'
        //Authorization: "?ts=1&apikey=a233e73069d922e3f3fef91f60b113bf&hash=732769b6e7edd45d92894d2ee2426abc"
        //authorization: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthcnl0aGFuYXNjaW1lbnRvQGdtYWlsLmNvbSIsInByb2ZpbGVfaW1hZ2VfdXJscyI6eyJvcmlnaW5hbCI6Ii9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9kZWZhdWx0LnBuZyIsIngxMDAiOiIvcHVibGljL2ltYWdlcy9jb21tb24vZGVmYXVsdC5wbmciLCJ4MjU2IjoiL3B1YmxpYy9pbWFnZXMvY29tbW9uL2RlZmF1bHQucG5nIn0sImRpc3BsYXlfbmFtZSI6IkvDgVJZVEhBIERFIE5BU0NJTUVOVE8iLCJfaWQiOiI1Yzk1M2MwZGNkYjI0ZjFhYTA0NTVhNmMiLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwiaWF0IjoxNTU0MzI1NjE5fQ.c9hzl1VWV66MlFPWXsGDT2NiVL-NqNyrecIFfRPzKRc"
      }
    });
  }
  render() {

    document.getElementById('app')
    return (

      <div>

        <Header title="Marvel" button="Veja mais" />
        <Body title="MARVEL" />
        <Bottom button="Comics" />
      </div>
    );
  }
}

export default App;
