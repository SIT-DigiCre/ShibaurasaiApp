import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab } from "material-ui/Tabs";
import StageGridPane from "./StageGridPane";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import * as PureRenderMixin from "react-addons-pure-render-mixin";

interface StagePageState {
    slideIndex: number;
}

export default class StagePage extends React.Component<{}, StagePageState>{
    constructor() {
        super();
        this.state = { slideIndex: 0 };
    }

    handleChange(value: number) {
        this.setState({ "slideIndex": value });
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
            overflowY: "hidden",
        },
    };
    shouldComponentUpdate(nextProps, nextState) {
        return PureRenderMixin.shouldComponentUpdate.bind(this)(nextProps, nextState, {});
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Tabs
                        onChange={this.handleChange.bind(this)}
                        value={this.state.slideIndex}
                        inkBarStyle={this.styles.inkbar}
                        >
                        <Tab label="Day 1" value={0} style={this.styles.tab} />
                        <Tab label="Day 2" value={1} style={this.styles.tab} />
                        <Tab label="Day 3" value={2} style={this.styles.tab} />
                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange.bind(this)}
                        >
                        <div style={this.styles.slide}>
                            <StageGridPane
                                ajax_url={"src/data/stages_day1.json"}
                                />
                        </div>
                        <div style={this.styles.slide}>
                            <StageGridPane
                                ajax_url={"src/data/stages_day2.json"}
                                />
                        </div>
                        <div style={this.styles.slide}>
                            <StageGridPane
                                ajax_url={"src/data/stages_day3.json"}
                                />
                        </div>
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}