import React, { Component } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import { WorldMapData } from '../Utils/Data';


class WorldMap extends Component {

	render() {
		return (
			<div >
				<div className='' style={{height: '18vh'}}>
					<p className="black b f1 f-headline-ns tc db mb3 mb4-ns" title="Home">Travel Planner</p>
					<p className='black f2'>select dream destination below</p>
				</div>
				<ComposableMap className='ba' style={{width: '90%', height: 'auto', maxHeight: '70vh'}}>
				  <ZoomableGroup>
				    <Geographies  geography={ WorldMapData }>
				      {(geographies, projection) => geographies.map(geography => (
				        <Geography 
				        	key={ geography.id } 
				        	geography={ geography } 
				        	projection={ projection } 
				        	style={{
			                    default: {			   
			                      fill: "#ECEFF1",
			                      stroke: "#607D8B",
			                      strokeWidth: 0.75,
			                      outline: "none",
			                    },
			                    hover: {
			                      fill: "#607D8B",
			                      stroke: "#607D8B",
			                      strokeWidth: 0.75,
			                      outline: "none",
			                    },
			                    pressed: {
			                      fill: "#FF5722",
			                      stroke: "#607D8B",
			                      strokeWidth: 0.75,
			                      outline: "none",
			                    },
			                }}
				        	onClick = {this.props.onRouteChange}
				        />
				      ))}
				    </Geographies>
				  </ZoomableGroup>
				</ComposableMap>
			</div>
		)
	}
}

export default WorldMap;
