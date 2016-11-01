import * as React from "react";
import GoogleMap from "./GoogleMap";
import LinkMarker from "./LinkMarker";
export default class MapPage extends React.Component<{}, {}> {
    render() {
        return (
            <GoogleMap>
                <LinkMarker position={new google.maps.LatLng(35.660302, 139.794263)} to="/building/教室棟/room" />
                <LinkMarker position={new google.maps.LatLng(35.660969, 139.794825)} to="/building/教室棟/room" />
                <LinkMarker position={new google.maps.LatLng(35.6602508, 139.7948724)} to="/building/製図室棟方面/stall" />
                <LinkMarker position={new google.maps.LatLng(35.6600631, 139.7946350)} to="/building/中央(駐車場方面)/stall" />
                <LinkMarker position={new google.maps.LatLng(35.6599605, 139.7945281)} to="/building/入口(駐車場方面)/stall" />
                <LinkMarker position={new google.maps.LatLng(35.6603593, 139.7947279)} to="/building/野外ステージ方面/stall" />
                <LinkMarker position={new google.maps.LatLng(35.6602233, 139.7945851)} to="/building/中央(交流棟方面)/stall" />
                <LinkMarker position={new google.maps.LatLng(35.6600503, 139.7944144)} to="/building/入口(交流棟方面)/stall" />

            </GoogleMap>
        )
    }
}