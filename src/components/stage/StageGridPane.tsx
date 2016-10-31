import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab } from "material-ui/Tabs";
import { StageInfo } from "./StageGridTile";
import { StageGridList } from "./StageGridList";
import * as axios from "axios";

interface StageGridPaneProps {
    ajax_url: string;
}

interface StageGridPaneState {
    stages: { [key: number]: StageInfo[] };
}

interface StageTab {
    title: string;
    key: string;
}
export default class StageGridPane extends React.Component<StageGridPaneProps, StageGridPaneState> {
    private tab_titles: StageTab[] = [{ "title": "大講義室", "key": "lecture" }, { "title": "野外ステージ", "key": "out" }];
    state = {
        stages: { 0: [], 1: [] }
    };
    style = {
        tab: {
            backgroundColor: "#00B848",
        },
        inkbar: {
            backgroundColor: "#33F868",
        }
    };
    separeteStage(all_stages: StageInfo[]) {
        let stages = { 0: [], 1: [] };
        all_stages.map((stage) => {
            stages[Number(stage.place)].push(stage);
        });
        return stages;
    }
    componentDidMount() {
        axios.get(this.props.ajax_url).then(
            (response) => {
                const stages = this.separeteStage(response.data as StageInfo[]);
                this.setState({ stages: stages });
            }
        );
    }
    render() {
        let tabs = this.tab_titles.map((tab_title, index) => {
            return (
                <Tab
                    label={tab_title.title}
                    key={tab_title.key}
                    value={index}
                    style={this.style.tab}>
                    <StageGridList null_message={"Not Found"}
                        stages={this.state.stages[index]} />
                </Tab>
            );
        });
        return (
            <div>
                <Tabs inkBarStyle={this.style.inkbar}>
                    {tabs}
                </Tabs>
            </div>
        );
    }
}