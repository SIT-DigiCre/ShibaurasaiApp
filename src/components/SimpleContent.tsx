import * as React from "react";
import { List, ListItem } from "material-ui/List";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class SimpleContent extends React.Component<{}, {}> {

    constructor() {
        super();
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <h1>Hi</h1>
                    <List>
                        <ListItem primaryText="Test" />
                        <ListItem primaryText="Test2" />
                        <ListItem primaryText="Test3" />
                    </List>
                </div>
            </MuiThemeProvider>
        );
    }
}