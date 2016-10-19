import * as React from "react";
import { EventCard, EventInfo } from "./EventCard";
import * as axios from "axios";

interface EventPageState {
    json: any;
}

export default class EventPage extends React.Component<{}, EventPageState>{
    constructor() {
        super();
        this.state = { json: "" };
    }
    componentDidMount() {
        axios.get("/src/data/events.json").then(
            (response) => {
                this.setState({ json: response.data });
                console.log(this);
            }
        );
    };

    render() {
        let cards;
        if (this.state.json) {
            cards = (this.state.json as EventInfo[]).map((info, index) => {
                return (
                    <EventCard {...info} key={index}/>
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