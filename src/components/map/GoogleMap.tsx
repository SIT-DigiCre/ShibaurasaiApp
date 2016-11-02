/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";

interface GoogleMapProps {
}

interface GoogleMapState {
    map: google.maps.Map;
}

export default class GoogleMap extends React.Component<GoogleMapProps, GoogleMapState> {
    static childContextTypes = {
        map: React.PropTypes.object
    };

    getChildContext() {
        return { map: this.state.map };
    }

    state = {
        map: null
    };

    constructor() {
        super();
    }

    componentDidMount() {
        const map = new google.maps.Map(
            ReactDOM.findDOMNode(this.refs["top"]),
            {
                center: new google.maps.LatLng(35.660521, 139.795379),
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        );
        this.setState({ "map": map });
    }
    render() {
        console.debug("render:GoogleMap %O", this.state.map);
        if (this.state.map) {
            return (
                <div>
                    <div ref="top" style={{ height: 600 }}>
                        {
                            React.cloneElement(
                                <div />, null, this.props.children
                            )
                        }
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div ref="top" style={{ height: 600 }}>
                    </div>
                </div>
            );
        }
    }

}