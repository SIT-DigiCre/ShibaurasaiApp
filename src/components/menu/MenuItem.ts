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
        key: "top",
        displayName: "Top",
        style: {
            textDecoration: "none"
        },
        to: "/"
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
        key: "stage",
        displayName: "Stage",
        style: {
            textDecoration: "none"
        },
        to: "/stage"
    },
    {
        key: "search",
        displayName: "Search",
        style: {
            textDecoration: "none"
        },
        to: "/search"
    },
    {
        key: "map",
        displayName: "Map",
        style: {
            textDecoration: "none"
        },
        to: "/map"
    },
    {
        key: "divider",
        displayName: "",
        style: {
        },
        to: ""
    },
    {
        key: "about",
        displayName: "About",
        style: {
            textDecoration: "none"
        },
        to: "/about"
    }
];