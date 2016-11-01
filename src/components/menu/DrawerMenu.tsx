import * as React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { MENU_ITEMS } from "./MenuItem";
import AppBar from "material-ui/AppBar";
import spacing from "material-ui/styles/spacing";
import { Link } from "react-router";
import Divider from "material-ui/Divider";

interface DrawerMenuProps {
    appBarTitle: string;
}

interface DrawerMenuState {
    open: boolean;
}

export default class DrawerMenu extends React.Component<DrawerMenuProps, DrawerMenuState> {
    /**
     * State
     */
    public state = {
        open: false
    };

    /**
     * AppBar Style Object
     */
    private appbar_style = {
        backgroundColor: "#00C853"
    };

    private link_style = {
        textDecoration: "none",
        fontWeight: 400
    };

    constructor() {
        super();
        this.state.open = false;
    }

    private handleToggle = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const menus = MENU_ITEMS.map((item) => {
            if (item.key === "divider") {
                return (<Divider />);
            } else if (item.to !== null) {
                return (
                    <Link to={item.to} style={this.link_style} key={item.key}>
                        <MenuItem key={item.key} onTouchTap={this.handleToggle} style={item.style}>
                            {item.displayName}
                        </MenuItem>
                    </Link>
                );
            } else {
                return (
                    <MenuItem key={item.key} onTouchTap={this.handleToggle} style={item.style}>
                        {item.displayName}
                    </MenuItem>
                );
            }
        });
        return (
            <div>
                <AppBar
                    title={this.props.appBarTitle}
                    onLeftIconButtonTouchTap={this.handleToggle}
                    style={this.appbar_style}
                    />
                <Drawer
                    open={this.state.open}
                    width={spacing.desktopKeylineIncrement * 5}
                    >
                    {menus}
                </Drawer>
            </div>
        );
    }
}