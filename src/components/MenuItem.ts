/**
 * Side Menu Bar 
 */
interface MenuItemObject {
    key: string;
    displayName: string;
    style: Object;
    to: string | null;
}


export const MENU_ITEMS: MenuItemObject[] = [
    {
        key: "back",
        displayName: "Back",
        style: {
            backgroundColor: "#B2FF59",
            textDecoration: "none"
        },
        to: null
    },
    {
        key: "events",
        displayName: "Event",
        style: {
            textDecoration: "none"
        },
        to: "/event"
    },
    {
        key: "title2",
        displayName: "title2",
        style: {
            textDecoration: "none"
        },
        to: ""
    }
];