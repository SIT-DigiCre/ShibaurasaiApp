import * as React from "react";
import GoogleMap from "./GoogleMap";
import LinkMarker from "./LinkMarker";
export default class MapPage extends React.Component<{}, {}> {
    render() {
        return (
            <GoogleMap>
                <LinkMarker position={new google.maps.LatLng(35.660302, 139.794263)} to="/event" />
            </GoogleMap>
        )
    }
}