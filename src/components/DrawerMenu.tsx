import * as React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import MenuItemObject from "./MenuItem";
import AppBar from "material-ui/AppBar";
import spacing from "material-ui/styles/spacing";
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

    private menu_items: MenuItemObject[] = [
        {
            key: "back",
            displayName: "戻る",
            onTouch: () => {
                this.handleToggle();
            },
            style: {
                backgroundColor: "#B2FF59"
            }
        },
        {
            key: "title",
            displayName: "title",
            onTouch: () => {
                console.log("test");
            },
            style: {

            }
        },
        {
            key: "title2",
            displayName: "title2",
            onTouch: () => {

            },
            style: {
            }
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
            return (
                <MenuItem key={item.key} onTouchTap={item.onTouch} style={item.style}>{item.displayName}</MenuItem>
            );
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