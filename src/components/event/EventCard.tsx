import * as React from "react";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { blue300, indigo900, white, cyan500 } from "material-ui/styles/colors";

export interface EventInfo {
    title: string;
    building: string;
    hierarchy: string;
    classroom: string;
    jungle: string;
    org: string;
    description: string;
    weburl: string;
    twitter: string;
    mail: string;
}

export class EventCard extends React.Component<EventInfo, {}> {
    private style = {
        paper: {
            padding: 10,
            margin: 10,
        },
        container: {
            width: "100%",
            display: "flex",
        },
        header: {
            width: "100%",
            title: {
                width: "100%",
                text: {
                    margin: 0,
                    marginBottom: "0.5em",
                }
            },
            chip: {
                display: "flex",
                flexWrap: "wrap",
                width: "80%",
                marginRight: "auto",
                marginLeft: "auto",
                marginTop: 0,
                marginBottom: 0
            },
        },
        description: {
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: 0,
            marginBottom: 0,
            width: "90%",
        }
    };
    render() {
        const place_name = this.props.building + " " + this.props.hierarchy + " " + this.props.classroom;
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Paper zDepth={2} style={this.style.paper}>
                    <div style={this.style.header}>
                        <div style={this.style.header.title}>
                            <h2 style={this.style.header.title.text}>{this.props.title}</h2>
                        </div>
                        <div style={this.style.header.chip}>
                            <Chip backgroundColor={blue300}>
                                {place_name}
                            </Chip>
                            <Chip backgroundColor={cyan500}>
                                {this.props.jungle}
                            </Chip>
                        </div>
                    </div>
                    <div style={this.style.description}>
                        <p>{this.props.description}</p>
                    </div>
                </Paper>
            </MuiThemeProvider>
        );
    }
}