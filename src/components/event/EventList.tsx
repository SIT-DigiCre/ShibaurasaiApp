import * as React from "react";
import { EventCard, EventInfo } from "./EventCard";
import Paper from "material-ui/Paper";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import LoadingPage from "../common/LoadingPage";
import * as axios from "axios";

interface EventListProps {
    filter_option: Object | null;
    title: string;
    null_message: string;
    ajax_url: string;
}

interface EventListState {
    events: EventInfo[];
    searched: boolean;
}

export default class EventList extends React.Component<EventListProps, EventListState> {
    constructor() {
        super();
        this.state = { events: [], searched: false };
    }
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
        axios.get(this.props.ajax_url).then(
            (response) => {
                const target_events = this.selectDisplayEvent(response.data as EventInfo[], this.props.filter_option);
                this.setState({ "events": target_events, searched: true });
            }
        );
    };

    render() {
        let cards;
        if (this.state.events.length > 0) {
            cards = this.state.events.map((info, index) => {
                return (
                    <EventCard {...info} key={index} />
                );
            });
        } else {
            if (this.state.searched) {
                cards = (<div style={this.style.null_message}><h3>{this.props.null_message}</h3></div>);
            } else {
                cards = (<LoadingPage />);
            }
        }
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Paper zDepth={2} style={this.style.paper}>
                    <h3 style={this.style.title}>{this.props.title}</h3>
                    {cards}
                </Paper>
            </MuiThemeProvider>
        )
    }
}