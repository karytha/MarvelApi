import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";





function orgComics(
    comics: any,
    //search: string
) {
    const organComics = comics.map((comic: any) => {
        return (
            <TableRow key={comic.id}>
                <TableCell component="th" scope="comic">
                    {comic.name}
                </TableCell>
                <TableCell align="center">{comic.description}</TableCell>
            </TableRow>
        )
    }
    );
    return organComics;
}



export default class Home extends Component {

    static navigationOptions = {
        title: 'Heroes'
    }

    state = {
        data: []
    }


    async componentDidMount() {

        // const timestamp = Number(new Date())
        // const hash = '732769b6e7edd45d92894d2ee2426abc'
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&orderBy=name&limit=10&apikey=a233e73069d922e3f3fef91f60b113bf&hash=732769b6e7edd45d92894d2ee2426abc`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
        console.log(this.state.data)
    }

    render() {
        const { data } = this.state;
        /// const [comics] = useState([]);
        return (
            <main className="root">
                <div className="toolbar">
                    <Paper className="paper">
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Descrição</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orgComics(data)}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </main>
        )


    }


}
