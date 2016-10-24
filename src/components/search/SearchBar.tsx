import * as React from "react";
import AutoComplete from "material-ui/AutoComplete";
import RaisedButton from "material-ui/RaisedButton";
import * as MediaQuery from "react-responsive";


interface SearchBarProps {
    dataSource: string[];
    onSearchRequest: (search_text: string) => void;
}

interface SearchBarState {
    text: string;
}
export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    private style = {
        root: {
            width: "100%",
            maxWidth: "100%",
            position: "flex",
            marginTop: "0.3em",
            marginBottom: "0.3em",
            flexDirection: "row",
            flexWrap: "wrap",
            autocomplete: {
                mobile: {
                    width: "100%"
                },
            },
            searchbutton: {
                marginLeft: "1.5em",
                mobile: {
                    float: "right",
                }
            }
        }
    };

    state = {
        text: ""
    };
    constructor() {
        super();
    }
    private handleSearchButtonTouchTaped = () => {
        this.props.onSearchRequest(this.state.text);
    }
    private handleAutoCompleteUpdateInput = (value: string, dataSource: string[]) => {
        this.setState({ text: value });
    }
    render() {
        return (
            <div style={this.style.root}>
                <MediaQuery minDeviceWidth={500}>
                    {(matched) => {
                        if (matched) {
                            return (
                                <div>
                                    <AutoComplete
                                        hintText="検索"
                                        onUpdateInput={this.handleAutoCompleteUpdateInput}
                                        dataSource={this.props.dataSource}
                                        />
                                    <RaisedButton
                                        label="検索"
                                        primary={true}
                                        onTouchTap={this.handleSearchButtonTouchTaped}
                                        style={this.style.root.searchbutton}
                                        />
                                </div>
                            );
                        } else {
                            return (
                                <div>
                                    <AutoComplete
                                        hintText="検索"
                                        onUpdateInput={this.handleAutoCompleteUpdateInput}
                                        dataSource={this.props.dataSource}
                                        fullWidth={true}
                                        />
                                    <RaisedButton
                                        label="検索"
                                        primary={true}
                                        onTouchTap={this.handleSearchButtonTouchTaped}
                                        style={this.style.root.searchbutton.mobile} />
                                </div>
                            );

                        }
                    } }
                </MediaQuery>
            </div>
        );
    }
}