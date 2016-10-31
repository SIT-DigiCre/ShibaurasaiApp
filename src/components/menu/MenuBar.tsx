import * as React from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DrawerMenu from "./DrawerMenu";

interface MenuBarProps {
    appName: string;
}

interface MenuBarState {
    open: boolean;
}

export default class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
    state = {
        open: false
    };
    constructor() {
        super();
    }
    handleToggle = () => {
        this.setState({ open: !this.state.open });
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <DrawerMenu appBarTitle={this.props.appName}/>
            </MuiThemeProvider>
        );
    }
}