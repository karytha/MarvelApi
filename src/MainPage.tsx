import React, { Component, useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router, RouteComponentProps, RouteProps, Redirect } from "react-router-dom";
import App from "./App";
import GetComics from "./Screens/Comics";
import PropTypes from "prop-types";
import { SearchContextProvider, SearchContextConsumer } from "./Components/SearchBar";
import Search from "./Components/Search";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Bottom from "./Components/Bottom";


const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            justifyContent: "center"
        },
        grow: {
            flexGrow: 1
        },

        menuButton: {
            marginLeft: -12,
            marginRight: 20
        },
        button: {
            color: "inherit",
            marginRight: 10,
            border: 0
        },
        table: {
            margin: "0 auto",
            marginLeft: 0
        },

        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: fade(theme.palette.common.white, 0.25)
            },
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing.unit,
                width: "auto"
            }
        },
        searchIcon: {
            width: theme.spacing.unit * 9,
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        inputRoot: {
            color: "inherit",
            width: "100%"

        },
        inputInput: {
            paddingTop: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
            paddingLeft: theme.spacing.unit * 10,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: 120,
                "&:focus": {
                    width: 200
                }
            }
        }
    });

const MainPage = (props: any) => {
    const { classes } = props;
    return (

        <SearchContextProvider>
            <SearchContextConsumer>
                {(context: any) => {
                    return (
                        <Router>
                            <React.Fragment>
                                <Header title="Marvel" button="Veja mais" />
                                <Search context={context} classes={classes} {...props} />
                                <Body title="MARVEL" />
                                <Bottom button="veja mais" />


                                <Switch>
                                    {/*  */}
                                    <Route exact path="/app" component={App} />
                                    <Route path="/comics" component={GetComics} />
                                    <Route path="/main" component={MainPage} />
                                </Switch>
                            </React.Fragment>
                        </Router>
                    );
                }}
            </SearchContextConsumer>
        </SearchContextProvider>



    );
};

export interface StyleProps extends WithStyles<typeof styles> { }

MainPage.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(MainPage);
