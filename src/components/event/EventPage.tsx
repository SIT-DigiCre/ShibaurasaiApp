import * as React from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import EventPane from "./EventPane";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

interface EventPageState {
    slideIndex: number;
}

export default class EventPage extends React.Component<{}, EventPageState>{
    constructor() {
        super();
        this.state = {slideIndex: 0};
    }

    handleChange(value:number){
        this.setState({"slideIndex": value});
    }

    private styles = {
        tab: {
            backgroundColor: "#00B848",
        },
        inkbar: {
            backgroundColor: "#33F868",
        },
        slide: {
            padding: 10,
        },
    };
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Tabs
                        onChange={this.handleChange.bind(this)}
                        value={this.state.slideIndex}
                        inkBarStyle={this.styles.inkbar}
                        >
                        <Tab label="展示" value={0} style={this.styles.tab} />
                        <Tab label="屋台" value={1} style={this.styles.tab} />
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange.bind(this)}
                        >
                        <EventPane ajax_url={"src/data/events_room.json"} />
                        <EventPane ajax_url={"src/data/events_stall.json"} />
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}