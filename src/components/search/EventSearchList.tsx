import EventList from "../event/EventList";
import { EventInfo } from "../event/EventCard";
import * as axios from "axios";

export default class EventSearchList extends EventList {
    private cache;
    public selectDisplayEvent(all_events: EventInfo[], filter_obj: Object) {
        const target_event = all_events.filter((event) => {
            for (let key in filter_obj) {
                if (event[key].indexOf(filter_obj[key]) !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
        });
        return target_event;
    }
    componentDidMount() {
        axios.get(this.ajax_url).then(
            (response) => {
                this.cache = response.data;
                const target_events = this.selectDisplayEvent(this.cache as EventInfo[], this.props.filter_option);
                this.setState({ "events": target_events, searched: true });
            }
        );
    };
    componentWillReceiveProps(nextProps) {
        const target_events = this.selectDisplayEvent(this.cache as EventInfo[], nextProps.filter_option);
        this.setState({ "events": target_events, searched: true });
    }
}