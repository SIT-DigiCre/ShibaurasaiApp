import * as React from "react";
import { GridTile } from "material-ui/GridList";

export interface StageInfo {
    title: string;
    genre: string;
    time: string;
    org: string;
    description: string;
    weburl: string;
    twitter: string;
    mail: string;
    place: number;
}

export class StageGridTile extends React.Component<StageInfo, {}> {
    private style = {
        tile: {
            padding: 5,
            margin: 5,
            header: {
                title: {
                    fontSize: "25px",
                }
            }
        }
    };
    render() {
        return (
            <GridTile
                style={this.style.tile}
                key={this.props.title}
                title={this.props.title}
                >
                <div>
                {this.props.title}
                {this.props.genre}
                {this.props.time}
                {this.props.org}
                {this.props.description}
                </div>
            </GridTile>
        );
    }
}