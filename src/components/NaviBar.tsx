import * as React from "react";
import "material-ui";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DrawerMenu from "./DrawerMenu";

interface NaviBarProps {
    appName: string;
}

interface NaviBarState {
    open: boolean;
}

export default class NaviBar extends React.Component<NaviBarProps, NaviBarState> {
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