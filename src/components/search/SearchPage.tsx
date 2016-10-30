import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import EventSearchList from "./EventSearchList";
import SearchBar from "./SearchBar";

interface SearchPageState {
    search_option: Object | null;
    search_text: string;
    search_field: string;
}

export default class SearchPage extends React.Component<{}, SearchPageState> {
    private urls = { "stall": "/src/data/events_stall.json", "room": "/src/data/events_room.json" };
    state = {
        search_option: null,
        search_text: "",
        search_field: ""
    };
    private geneLateSearchList() {
        if (this.state.search_option === null) {
            return (<div></div>);
        } else {
            return (
                <EventSearchList
                    null_message={"みつかりませんでした"}
                    title={"検索結果 - " + this.state.search_text}
                    filter_option={this.state.search_option}
                    ajax_url={this.urls[this.state.search_field]}
                    />
            );
        }
    };
    private onSearchRequest = (search_text: string, field: string) => {
        const option = { "title": search_text, "description": search_text, "org": search_text };
        this.setState({ search_option: option, search_text: search_text, search_field: field });
    }
    render() {
        const searchList = this.geneLateSearchList();
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <SearchBar dataSource={[""]} onSearchRequest={this.onSearchRequest} />
                    {searchList}
                </div>
            </MuiThemeProvider>
        );
    }
}