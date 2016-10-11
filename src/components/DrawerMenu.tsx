import * as React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import MenuItemObject from "./MenuItem";

interface DrawerMenuProps {

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

    private menu_items: MenuItemObject[] = [
        {
            name: "back",
            onTouch: () => {
                this.handleToggle();
            },
            style: {
                backgroundColor: "#B2FF59"
            }
        },
        {
            name: "title",
            onTouch: () => {
                console.log("test");
            },
            style: {

            }
        },
        {
            name: "title2",
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
                <MenuItem key={item.name} onTouchTap={item.onTouch} style={item.style}>{item.name}</MenuItem>
            );
        });
        return (
            <div>
                <IconButton onTouchTap={this.handleToggle}>
                    <FontIcon className="material-icons">menu</FontIcon>
                </IconButton>
                <Drawer open={this.state.open}>
                    {menus}
                </Drawer>
            </div>
        );
    }
}