import * as React from "react";
import { EventCard, EventInfo } from "../event/EventCard";
import Paper from "material-ui/Paper";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as axios from "axios";

interface MapEventListProps {
    params: {
        building: string;
        room_or_stall: string;
    };
}

interface MapEventListState {
    events: EventInfo[];
    searched: boolean;
}

export default class MapEventList extends React.Component<MapEventListProps, MapEventListState> {
    constructor() {
        super();
        this.state = { events: [], searched: false } as MapEventListState;
    }
    private null_message = "見つかりませんでした．";
    private ajax_base_url = "src/data/events_";
    private style = {
        paper: {
            margin: 5,
            padding: 5,
        },
        title: {
            marginTop: "0.5em",
            marginBottom: "0.5em",
            marginLeft: "1em"
        },
        null_message: {
            marginTop: "3em",
            marginBottom: "3em",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
        }
    };
    /**
     * 表示するイベントを選択します
     * @param all_events すべてのイベント
     * @returns 表示するイベント
     */
    public selectDisplayEvent(all_events: EventInfo[], filter: Object): EventInfo[] {
        const target_events = all_events.filter((event) => {
            if (filter) {
                for (let key in filter) {
                    if (event[key] && event[key] !== filter[key]) {
                        return false;
                    }
                }
                return true;
            } else {
                return true;
            }
        });
        return target_events;
    };
    componentDidMount() {
        const url = this.ajax_base_url + this.props.params.room_or_stall + ".json";
        axios.get(url).then(
            (response) => {
                const filter_option = { "building": this.props.params.building };
                const target_events = this.selectDisplayEvent(response.data as EventInfo[], filter_option);
                this.setState({ "events": target_events, searched: true });
            }
        );
    };

    render() {
        const title = this.props.params.building + "のイベント一覧";
        let cards;
        if (this.state.events.length > 0) {
            cards = this.state.events.map((info, index) => {
                return (
                    <EventCard {...info} key={index} />
                );
            });
        } else {
            if (this.state.searched) {
                cards = (<div style={this.style.null_message}><h3>{this.null_message}</h3></div>);
            } else {
                cards = (<div>Loading……</div>);
            }
        }
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Paper zDepth={2} style={this.style.paper}>
                    <h3 style={this.style.title}>{title}</h3>
                    {cards}
                </Paper>
            </MuiThemeProvider>
        )
    }
}