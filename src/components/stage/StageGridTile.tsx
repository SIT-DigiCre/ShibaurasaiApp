import * as React from "react";
import { DescriptionConverterGenerator } from "../utils/DescriptionConverter";
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import AccessTimeIcon from "material-ui/svg-icons/device/access-time";
import { GridTile } from "material-ui/GridList";
import Paper from "material-ui/Paper";
import GenreBadge from "../common/GenreBadge";
import LinkIcon from "material-ui/svg-icons/content/link";
import * as MediaQuery from "react-responsive";
import { lightBlueA400, lightBlueA200, orangeA400, amberA200, white } from "material-ui/styles/colors";

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
    private converter = DescriptionConverterGenerator.getConverter();
    private style = {
        tile: {
            padding: 2,
            margin: 20,
            header: {
                title: {
                    fontSize: "25px",
                }
            },
            paper: {
                mobile: {
                    height: 240,
                    padding: 3,
                },
                pc: {
                    height: 160,
                    padding: 5,
                }
            },
            content: {
                marginTop: 70,
                info: {
                    link: {
                        textDecoration: "none"
                    },
                    display: "flex",
                    flexWrap: "wrap",
                    chip: {
                        margin: 4,
                    }
                },
                description: {
                    marginLeft: 10,
                }
            }
        }
    };
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props;
    }
    render() {
        return (
            <GridTile
                style={this.style.tile}
                key={this.props.title}
                title={this.props.title}
                titlePosition={"top"}
                subtitle={this.props.org}
                titleBackground={"rgb(40, 191, 45)"}
                >
                <div style={this.style.tile.content}>
                    <MediaQuery minDeviceWidth={800}>
                        {(matched) => {
                            if (matched) {
                                return (
                                    <Paper style={this.style.tile.paper.pc}>
                                        <div style={this.style.tile.content.info}>
                                            <Chip style={this.style.tile.content.info.chip} backgroundColor={lightBlueA200}>
                                                <Avatar backgroundColor={lightBlueA400} color={white} icon={<AccessTimeIcon />} />
                                                {this.props.time}
                                            </Chip>
                                            {(() => {
                                                if (this.props.genre) {
                                                    return (<GenreBadge type={this.props.genre} style={this.style.tile.content.info.chip} />);
                                                }
                                            })()}
                                            {(() => {
                                                if (this.props.weburl) {
                                                    return (
                                                        <a href={this.props.weburl} style={this.style.tile.content.info.link}>
                                                            <Chip style={this.style.tile.content.info.chip} backgroundColor={amberA200}>
                                                                <Avatar icon={<LinkIcon />} backgroundColor={orangeA400} />
                                                                WebSite
                                            </Chip>
                                                        </a>
                                                    );
                                                }
                                            })()}
                                        </div>
                                        <div style={this.style.tile.content.description}
                                            dangerouslySetInnerHTML={{ __html: this.converter.makeHtml(this.props.description) }}
                                            >
                                        </div>
                                    </Paper>
                                );
                            } else {
                                return (
                                    <Paper style={this.style.tile.paper.mobile}>
                                        <div style={this.style.tile.content.info}>
                                            <Chip style={this.style.tile.content.info.chip} backgroundColor={lightBlueA200}>
                                                <Avatar backgroundColor={lightBlueA400} color={white} icon={<AccessTimeIcon />} />
                                                {this.props.time}
                                            </Chip>
                                            {(() => {
                                                if (this.props.genre) {
                                                    return (<GenreBadge type={this.props.genre} style={this.style.tile.content.info.chip} />);
                                                }
                                            })()}
                                            {(() => {
                                                if (this.props.weburl) {
                                                    return (
                                                        <a href={this.props.weburl} style={this.style.tile.content.info.link}>
                                                            <Chip style={this.style.tile.content.info.chip} backgroundColor={amberA200}>
                                                                <Avatar icon={<LinkIcon />} backgroundColor={orangeA400} />
                                                                WebSite
                                            </Chip>
                                                        </a>
                                                    );
                                                }
                                            })()}
                                        </div>
                                        <div style={this.style.tile.content.description}
                                            dangerouslySetInnerHTML={{ __html: this.converter.makeHtml(this.props.description) }}
                                            >
                                        </div>
                                    </Paper>
                                );
                            }
                        } }

                    </MediaQuery>
                </div>
            </GridTile>
        );
    }
}