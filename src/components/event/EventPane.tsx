import * as React from "react";
import { EventCard, EventInfo } from "./EventCard";
import * as axios from "axios";

interface EventPaneProps {
    ajax_url: string;
}

interface EventPaneState {
    json: any;
}

export default class EventPane extends React.Component<EventPaneProps, EventPaneState>{
    constructor() {
        super();
        this.state = { json: "" };
    }
    componentDidMount() {
        axios.get(this.props.ajax_url).then(
            (response) => {
                this.setState({ json: response.data });
            }
        );
    };

    render() {
        let cards;
        if (this.state.json) {
            cards = (this.state.json as EventInfo[]).map((info, index) => {
                return (
                    <EventCard {...info} key={index} />
                );
            });
        } else {
            cards = (<div>Now Loading...</div>);
        }
        return (
            <div>
                {cards}
            </div>
        );
    }
}