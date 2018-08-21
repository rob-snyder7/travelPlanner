import React, { Component } from 'react';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import { WorldMapData } from '../Utils/Data';
import ReactTooltip from 'react-tooltip';


class WorldMap extends Component {

	handleMove(event) {
		console.log(event.properties.NAME)
	}


	render() {
		return (
			<div >
				<ReactTooltip place='top' type='dark' effect='float'/>
				<div className='' style={{height: '18vh'}}>
					<p className="black b f1 f-headline-ns tc db mb3 mb4-ns" title="Home">Travel Planner</p>
					<p className='black f2'>select dream destination below</p>
				</div>
				<ComposableMap className='ba' style={{width: '90%', height: 'auto', maxHeight: '70vh'}}>
				  <ZoomableGroup>
				    <Geographies  geography={ WorldMapData }>
				      {(geographies, projection) => geographies.map(geography => (
				        <Geography 
				        	data-tip={geography.properties.NAME}
				        	key={ geography.id } 
				        	geography={ geography } 
				        	projection={ projection } 
				        	onMouseMove={this.handleMove}
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
