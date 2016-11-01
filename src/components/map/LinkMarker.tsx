/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>

import * as React from "react";
import { hashHistory } from "react-router";

interface MarkerContext {
    map: google.maps.Map;
}

interface LinkMarkerProps {
    position: google.maps.LatLng;
    to: string;
}

interface LinkMarkerState {
}

export default class LinkMarker extends React.Component<LinkMarkerProps, LinkMarkerState> {
    context: MarkerContext;

    static contextTypes = {
        map: React.PropTypes.object
    };

    constructor() {
        super();
    }
    createMarker() {
        const marker = new google.maps.Marker(
            {
                position: this.props.position,
            }
        );
        marker.setMap(this.context.map);
        marker.addListener("click", this.onMarkerClick.bind(this));
    }

    onMarkerClick() {
        hashHistory.push(this.props.to);
    }

    componentDidMount() {
        if (this.context.map !== null) {
            this.createMarker();
        }
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}