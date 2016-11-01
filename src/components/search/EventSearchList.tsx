import EventList from "../event/EventList";
import { EventInfo } from "../event/EventCard";
import * as axios from "axios";

export default class EventSearchList extends EventList {
    private cache: { [key: string]: Object } = {};
    private ajax_urls = ["src/data/events_room.json", "src/data/events_stall.json"];
    public selectDisplayEvent(all_events: EventInfo[], filter_obj: Object) {
        const target_event = all_events.filter((event) => {
            for (let key in filter_obj) {
                if (event[key].indexOf(filter_obj[key]) !== -1) {
                    return true;
                }
            }
            return false;
        });
        return target_event;
    }
    componentDidMount() {
        axios.get(this.props.ajax_url).then(
            (response) => {
                this.cache[this.props.ajax_url] = response.data;
                const target_events = this.selectDisplayEvent(this.cache[this.props.ajax_url] as EventInfo[], this.props.filter_option);
                this.setState({ "events": target_events, searched: true });
            }
        );
    };
    componentWillReceiveProps(nextProps) {
        if (this.cache[nextProps.ajax_url]) {
            const target_events = this.selectDisplayEvent(this.cache[nextProps.ajax_url] as EventInfo[], nextProps.filter_option);
            this.setState({ "events": target_events, searched: true });
        } else {
            axios.get(nextProps.ajax_url).then(
                (response) => {
                    this.cache[nextProps.ajax_url] = response.data;
                    const target_events = this.selectDisplayEvent(this.cache[nextProps.ajax_url] as EventInfo[], nextProps.filter_option);
                    this.setState({ "events": target_events, searched: true });
                }
            );
        }
    }
}