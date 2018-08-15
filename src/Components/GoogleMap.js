import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import { countryCoordinates } from '../Utils/Data';

 
class GoogleMap extends Component {
	constructor(props) {
		super(props)
		this.state = {
			center: {
				lat: countryCoordinates[this.props.country][0],
				lng: countryCoordinates[this.props.country][1]
			}
		}
	}



	render() {
	    return (
	    	
	      <div style={{ height: '37vh', width: '100%' }}>

	        <GoogleMapReact
	          bootstrapURLKeys={{ key: 'AIzaSyCkNvM32n5Xu-xZUwdtniP1Mq2a4JvzvOQ' }}
	          defaultCenter={this.state.center}
	          defaultZoom={5}
	        >
	        </GoogleMapReact>
	      </div>
	    );
	}
}
 
export default GoogleMap;