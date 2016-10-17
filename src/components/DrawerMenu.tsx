import * as React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import MenuItemObject from "./MenuItem";
import AppBar from "material-ui/AppBar";
import spacing from "material-ui/styles/spacing";
import { Link } from "react-router";

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

    private menu_items: MenuItemObject[] = [
        {
            key: "back",
            displayName: "Back",
            onTouch: () => {
                this.handleToggle();
            },
            style: {
                backgroundColor: "#B2FF59",
                textDecoration: "none"
            },
            to: null
        },
        {
            key: "title",
            displayName: "title",
            onTouch: () => {
                this.handleToggle();
                console.log("test");
            },
            style: {
                textDecoration: "none"
            },
            to: "/test"
        },
        {
            key: "title2",
            displayName: "title2",
            onTouch: () => {
                this.handleToggle();
            },
            style: {
                textDecoration: "none"
            },
            to: ""
        }
    ];

    constructor() {
        super();
        this.state.open = false;
    }

    private handleToggle = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const menus = this.menu_items.map((item) => {
            if (item.to !== null) {
                return (
                    <Link to={item.to} style={this.link_style}>
                        <MenuItem key={item.key} onTouchTap={item.onTouch} style={item.style}>
                            {item.displayName}
                        </MenuItem>
                    </Link>
                );
            } else {
                return (
                    <MenuItem key={item.key} onTouchTap={item.onTouch} style={item.style}>
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
                <Drawer open={this.state.open}
                    width={spacing.desktopKeylineIncrement * 5}>
                    {menus}
                </Drawer>
            </div>
        );
    }
}