import * as React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DrawerMenu from "./DrawerMenu";

interface NaviBarProps {
    name: string;
}

interface NaviBarState {
    open: boolean;
}

export default class NaviBarComponent extends React.Component<NaviBarProps, NaviBarState> {
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
                    <DrawerMenu/>
            </MuiThemeProvider>
        );
    }
}