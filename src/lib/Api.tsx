import React, { useState } from "react";
import axios from 'axios';

const KEY = "?ts=1&apikey=a233e73069d922e3f3fef91f60b113bf&hash=732769b6e7edd45d92894d2ee2426abc";

class API {
    private url: string;

    constructor(url: string) {
        url = "http://gateway.marvel.com/v1/public/";
        this.url = url;

    }

    get(endpoint: string) {
        return fetch(this.url + endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "?ts=1&apikey=a233e73069d922e3f3fef91f60b113bf&hash=732769b6e7edd45d92894d2ee2426abc"
                //authorization: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthcnl0aGFuYXNjaW1lbnRvQGdtYWlsLmNvbSIsInByb2ZpbGVfaW1hZ2VfdXJscyI6eyJvcmlnaW5hbCI6Ii9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9kZWZhdWx0LnBuZyIsIngxMDAiOiIvcHVibGljL2ltYWdlcy9jb21tb24vZGVmYXVsdC5wbmciLCJ4MjU2IjoiL3B1YmxpYy9pbWFnZXMvY29tbW9uL2RlZmF1bHQucG5nIn0sImRpc3BsYXlfbmFtZSI6IkvDgVJZVEhBIERFIE5BU0NJTUVOVE8iLCJfaWQiOiI1Yzk1M2MwZGNkYjI0ZjFhYTA0NTVhNmMiLCJyb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwiaWF0IjoxNTU0MzI1NjE5fQ.c9hzl1VWV66MlFPWXsGDT2NiVL-NqNyrecIFfRPzKRc"
            }
        });
    }


}

export default API;