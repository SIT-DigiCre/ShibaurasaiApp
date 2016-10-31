import * as React from "react";
import Paper from "material-ui/Paper";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from "react-router";

export default class TopPage extends React.Component<{}, {}>{
    private style: { [key: string]: Object | React.CSSProperties } = {
        link_style: {
            textDecoration: "none",
            color: "black",
        }
    };
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Link to="/event" style={this.style["link_style"]}>
                        <h1>Event</h1>
                    </Link>
                    <Link to="/stage" style={this.style["link_style"]}>
                        <h1>Stage</h1>
                    </Link>
                    <Link to="/search" style={this.style["link_style"]}>
                        <h1>Search</h1>
                    </Link>
                    <Link to="/map" style={this.style["link_style"]}>
                        <h1>Map</h1>
                    </Link>
                </div>
            </MuiThemeProvider>
        );
    }
}
