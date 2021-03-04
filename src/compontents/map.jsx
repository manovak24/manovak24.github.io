import React from 'react';
import GoogleMapReact from 'google-map-react';
import { MdMyLocation } from 'react-icons/md';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends React.Component {
    static defaultProps = {
        center: {
            lat: 46.54,
            lng: -87.40
        },
        zoom: 11
    };

    render() {
        return (
            <div style={{ height: '18rem', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys= {{ key: process.env.REACT_APP_GOOGLEMAP_API_KEY }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom} >
                    <AnyReactComponent
                    lat={46.54}
                    lng={-87.40}
                    text={<MdMyLocation size='16' />} />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;