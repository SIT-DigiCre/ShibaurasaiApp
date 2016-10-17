/**
 * Side Menu Bar 
 */
interface MenuItemObject {
    key: string;
    displayName: string;
    onTouch: () => void;
    style: Object;
    to: string | null;
}

export default MenuItemObject;