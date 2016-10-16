/**
 * Side Menu Bar 
 */
interface MenuItemObject {
    key: string;
    displayName: string;
    onTouch: () => void;
    style: Object;
    to: string;
}

export default MenuItemObject;