import * as React from "react";
import AutoComplete from "material-ui/AutoComplete";
import RaisedButton from "material-ui/RaisedButton";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import * as MediaQuery from "react-responsive";


interface SearchBarProps {
    dataSource: string[];
    onSearchRequest: (search_text: string, field: string) => void;
}

interface SearchBarState {
    text: string;
    menu_value: number;
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    private search_options: string[][] = [["stall", "屋台"], ["room", "展示"]];
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
        text: "",
        menu_value: 0
    };
    constructor() {
        super();
    }
    private handleDropDownChange = (event, index, value) => {
        this.setState({ menu_value: value } as SearchBarState);
    }
    private handleSearchButtonTouchTaped = () => {
        this.props.onSearchRequest(this.state.text, this.search_options[this.state.menu_value][0]);
    }
    private handleAutoCompleteUpdateInput = (value: string, dataSource: string[]) => {
        this.setState({ text: value } as SearchBarState);
    }
    render() {
        const dropdown_menu = (
            <DropDownMenu
                onChange={this.handleDropDownChange}
                value={this.state.menu_value}>
                {this.search_options.map((data, index) => {
                    return (<MenuItem value={index} key={data[0]} primaryText={data[1]} />);
                })}
            </DropDownMenu>
        );
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
                                    {dropdown_menu}
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
                                    {dropdown_menu}
                                </div>
                            );

                        }
                    } }
                </MediaQuery>
            </div>
        );
    }
}