import * as React from "react";
import { StageGridTile, StageInfo } from "./StageGridTile";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import GridList from "material-ui/GridList";
import * as axios from "axios";

export interface StageGridListProps {
    null_message: string;
    stages: StageInfo[];
}

interface StageGridListState {
}

export class StageGridList extends React.Component<StageGridListProps, StageGridListState> {
    constructor() {
        super();
    }
    private styles = {
        null_message: {
            marginTop: "3em",
            marginBottom: "3em",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
        },
        gridList: {
        }
    };
    private selectDisplayStageGrid(all_stages: StageInfo[]) {
    };
    componentDidMount() {
    };

    render() {
        let tiles;
        if (this.props.stages.length > 0) {
            tiles = this.props.stages.map((info, index) => {
                return (
                    <StageGridTile {...info} key={index} />
                );
            });
        }
        return (
            <GridList
                cols={1}
                style={this.styles.gridList}
                >
                {tiles}
            </GridList>
        )
    }
}