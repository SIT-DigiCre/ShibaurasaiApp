import * as React from "react";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import { blue300, indigo900, white, cyan500 } from "material-ui/styles/colors";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

export interface EventInfo {
    title: string;
    building: string;
    floor: string;
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
        card: {
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
        const place_name = this.props.building + " " + this.props.floor + " " + this.props.classroom;
        return (
            <Card style={this.style.card}>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.org}
                    actAsExpander={true}
                    showExpandableButton={true}
                    titleStyle={this.style.card.header.title}
                    />
                <CardText expandable={true}>
                    {this.props.description}
                    <a href={this.props.weburl}> WebPage </a>
                </CardText>
            </Card>
        );
    }
}