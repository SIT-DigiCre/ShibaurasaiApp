import * as React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import { DescriptionConverterGenerator } from "../utils/DescriptionConverter";

export interface EventInfo {
    title: string;
    building: string;
    floor: string;
    classroom: string;
    genre: string;
    org: string;
    description: string;
    weburl: string;
    twitter: string;
    mail: string;
}

export class EventCard extends React.Component<EventInfo, {}> {
    private converter = DescriptionConverterGenerator.getConverter();
    constructor() {
        super();
    }
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
                    <div dangerouslySetInnerHTML={{__html: this.converter.makeHtml(this.props.description)}}>
                    </div>
                    <a href={this.props.weburl}> WebPage </a>
                </CardText>
            </Card>
        );
    }
}