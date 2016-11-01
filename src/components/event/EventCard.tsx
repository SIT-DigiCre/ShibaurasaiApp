import * as React from "react";
import { Card, CardHeader, CardText, CardTitle } from "material-ui/Card";
import { DescriptionConverterGenerator } from "../utils/DescriptionConverter";
import GenreBadge from "../common/GenreBadge";
import { List, ListItem } from "material-ui/List";
import MailIcon from "material-ui/svg-icons/content/mail";
import LinkIcon from "material-ui/svg-icons/content/link";

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
    private style = {
        card: {
            margin: 5,
            header: {
                padding: "8px",
                paddingLeft: "16px",
                title: {
                    fontSize: "25px",
                }
            },
            title: {
                paddingBottom: "6px",
                paddingTop: "6px"
            },
            badge: {
                margin: "5px",
                marginLeft: "26px",
                padding: "5px",
                paddingBottom: "16px"
            },
            text: {
                backgroundColor:"#",
                padding: "6px",
                description: {
                    paddingLeft: "1.5em",
                    paddingRight: "0.5em"
                },
                list: {
                    textDecoration: "none"
                }
            }
        }
    };
    constructor() {
        super();
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props;
    }
    generateList() {
        let element;
    }
    render() {
        const place_name = this.props.building + " " + this.props.floor + " " + this.props.classroom;
        return (
            <Card style={this.style.card}>
                <CardHeader
                    title={this.props.org}
                    actAsExpander={true}
                    showExpandableButton={true}
                    style={this.style.card.header}
                    />
                <CardTitle
                    title={this.props.title}
                    actAsExpander={true}
                    style={this.style.card.title}
                    subtitle={place_name}>
                    <GenreBadge
                        type={this.props.genre}
                        style={this.style.card.badge} />
                </CardTitle>
                <CardText expandable={true}
                    style={this.style.card.text}>
                    <div
                        style={this.style.card.text.description}
                        dangerouslySetInnerHTML={{ __html: this.converter.makeHtml(this.props.description) }}
                        >
                    </div>
                    <List>
                        <div>
                            {(() => {
                                if (this.props.twitter) {
                                    return (
                                        <a href={"https://twitter.com/" + this.props.twitter} style={this.style.card.text.list}>
                                            <ListItem primaryText={"Twitter"} />
                                        </a>
                                    );
                                }
                            })()}
                            {(() => {
                                if (this.props.mail) {
                                    return (
                                        <a href={"mail:" + this.props.mail} style={this.style.card.text.list}>
                                            <ListItem primaryText={this.props.mail} leftIcon={<MailIcon />} />
                                        </a>
                                    );
                                }
                            })()}
                            {(() => {
                                if (this.props.weburl) {
                                    return (
                                        <a href={this.props.weburl} style={this.style.card.text.list}>
                                            <ListItem primaryText={"WebSite"} leftIcon={<LinkIcon />} />
                                        </a>
                                    );
                                }
                            })()}
                        </div>
                    </List>
                </CardText>
            </Card>
        );
    }
}