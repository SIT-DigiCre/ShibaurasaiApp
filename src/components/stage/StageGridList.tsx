import * as React from "react";
import { StageGridTile, StageInfo } from "./StageGridTile";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import GridList from "material-ui/GridList";
import * as axios from "axios";

export interface StageGridListProps {
    ajax_url: string;
    filter_option: Object | null;
    title: string;
    null_message: string;
}

interface StageGridListState {
    stages: StageInfo[];
    searched: boolean;
}

export class StageGridList extends React.Component<StageGridListProps, StageGridListState> {
    constructor() {
        super();
        this.state = { stages: [], searched: false };
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
        const target_stages = () => {
            if (this.props.filter_option) {
                return all_stages.filter((stage) => {
                    for (let key in this.props.filter_option) {
                        if (stage[key] && stage[key] !== this.props.filter_option[key]) {
                            return false;
                        }
                    }
                    return true;
                });
            } else {
                return all_stages;
            }
        };
        return target_stages();
    };
    componentDidMount() {
        axios.get(this.props.ajax_url).then(
            (response) => {
                const target_stages = this.selectDisplayStageGrid(response.data as StageInfo[]);
                this.setState({ stages: target_stages, searched: true });
            }
        );
    };

    render() {
        let tiles;
        if (this.state.stages.length > 0) {
            tiles = this.state.stages.map((info, index) => {
                return (
                    <StageGridTile {...info} key={index} />
                );
            });
        } else {
            if (this.state.searched) {
                tiles = (<div style={this.styles.null_message}><h3>{this.props.null_message}</h3></div>);
            } else {
                tiles = (<div>Loading……</div>);
            }
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