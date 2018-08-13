import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";
import {data} from './Utils/maptest';

const mapStyles = {
	  width: "90%",
	  height: "auto",
	}

class WorldMap extends Component {
	
	handleClick = (geography, evt) => {
		console.log("Country name: ", geography.properties.NAME)
	}

	render() {
		return (
			<div >
				<div className='f1-ns'style={{height: '17vh'}}>
					Travel Planner
				</div>
				<ComposableMap style={{width: '100%', height: '70vh'}}>
				  <ZoomableGroup >
				    <Geographies  geography={ data }>
				      {(geographies, projection) => geographies.map(geography => (
				        <Geography 
				        	key={ geography.id } 
				        	geography={ geography } 
				        	projection={ projection } 
				        	style={{
			                    default: {
			                    	width: '100%',
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



		


			// 		<div>
			// 	<ComposableMap>
			// 	  <ZoomableGroup>
			// 	    <Geographies geography={ data }>
			// 	      {(geographies, projection) => geographies.map(geography => (
			// 	        <Geography 
			// 	        	key={ geography.id } 
			// 	        	geography={ geography } 
			// 	        	projection={ projection } 
			// 	        	onClick = {this.handleClick}
			// 	        />
			// 	      ))}
			// 	    </Geographies>
			// 	  </ZoomableGroup>
			// 	</ComposableMap>
			// </div>
			// 	<div>
			//     <ComposableMap
			//       width={500}
			//       height={500}
			//       projection="orthographic"
			//       projectionConfig={{ scale: 220 }}
			//       style={mapStyles}
			//     >
			//       <ZoomableGlobe>
			//         <circle cx={250} cy={250} r={220} fill="transparent" stroke="#CFD8DC" />
			//         <Geographies
			//           disableOptimization
			//           geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
			//         >
			//           {(geos, proj) =>
			//             geos.map((geo, i) => (
			//               <Geography
			//                 key={geo.id + i}
			//                 geography={geo}
			//                 projection={proj}
			//                 onClick={this.handleClick}
			//                 style={{
			//                   default: { fill: "#CFD8DC" }
			//                 }}
			//               />
			//             ))
			//           }
			//         </Geographies>
			//       </ZoomableGlobe>
			//     </ComposableMap>
			// </div>