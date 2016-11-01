import * as React from "react";
import Avatar from "material-ui/Avatar";
import Chip from "material-ui/Chip";
import RestaurantMenuIcon from "material-ui/svg-icons/maps/restaurant-menu";
import CakeIcon from "material-ui/svg-icons/social/cake";
import RemoveRedEyeIcon from "material-ui/svg-icons/image/remove-red-eye";
import SlideShowIcon from "material-ui/svg-icons/image/slideshow";
import AccessibilityIcon from "material-ui/svg-icons/action/accessibility";
import FaceIcon from "material-ui/svg-icons/action/face";
import { lightGreenA200, greenA400, white } from "material-ui/styles/colors";

interface GenreCardBadgeProps {
    type: string;
    style: React.CSSProperties | null;
}
const genre_variety: { [key: string]: React.ReactElement<any> } = {
    "体験系": (<AccessibilityIcon />),
    "展示発表(展示)": (<RemoveRedEyeIcon />),
    "展示発表(発表)": (<SlideShowIcon />),
    "その他": (<FaceIcon />),
    "スイーツ": (<CakeIcon />),
    "食事": (<RestaurantMenuIcon />)
};
const GenreBadge: React.SFC<GenreCardBadgeProps> = (props: GenreCardBadgeProps) => {
    return (
        <div style={props.style}>
            <Chip backgroundColor={lightGreenA200}>
                <Avatar icon={genre_variety[props.type]} color={white} backgroundColor={greenA400} />
                {props.type}
            </Chip>
        </div>
    );
};
export default GenreBadge;