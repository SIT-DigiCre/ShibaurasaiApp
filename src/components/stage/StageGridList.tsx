import * as React from "react";
import { StageGridTile, StageInfo } from "./StageGridTile";
import GridList from "material-ui/GridList";
import * as MediaQuery from "react-responsive";
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
            <div>
                <MediaQuery minDeviceWidth={800}>
                    {(matched) => {
                        if (matched) {
                            return (
                                <GridList
                                    cols={1}
                                    style={this.styles.gridList}
                                    cellHeight={240}
                                    >
                                    {tiles}
                                </GridList>
                            );
                        } else {
                            return (
                                <GridList
                                    cols={1}
                                    style={this.styles.gridList}
                                    cellHeight={370}
                                    >
                                    {tiles}
                                </GridList>
                            );
                        }
                    } }
                </MediaQuery>
            </div>
        )
    }
}