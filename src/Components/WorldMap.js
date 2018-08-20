import React, { Component } from 'react';
import withRedux from "next-redux-wrapper"
import { ComposableMap, ZoomableGroup, Geographies, Geography } from "react-simple-maps";
import { WorldMapData } from '../Utils/Data';
import { connect } from 'react-redux';
import {
  Tooltip,
  actions,
} from "redux-tooltip"

import { initStore } from './stores';

const { show, hide } = actions

class WorldMap extends Component {
  constructor() {
    super()
    this.handleMove = this.handleMove.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
  }
  handleMove(geography, evt) {
    const x = evt.clientX
    const y = evt.clientY + window.pageYOffset
    this.props.dispatch(
      show({
        origin: { x, y },
        content: geography.properties.name,
      })
    )
  }
  handleLeave() {
    this.props.dispatch(hide())
  }	

	render() {
		return (
			<div >
				<div className='' style={{height: '18vh'}}>
					<p className="black b f1 f-headline-ns tc db mb3 mb4-ns" title="Home">Travel Planner</p>
					<p className='black f2'>select dream destination below</p>
				</div>
			<div>
				<ComposableMap className='ba' style={{width: '90%', height: 'auto', maxHeight: '70vh'}}>
				  <ZoomableGroup>
				    <Geographies  geography={ WorldMapData }>
				      {(geographies, projection) => geographies.map(geography => (
				        <Geography 
				        	key={ geography.id } 
				        	geography={ geography } 
				        	projection={ projection } 
		                    onMouseMove={this.handleMove}
		                    onMouseLeave={this.handleLeave}
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
				<Tooltip />
				</div>
			</div>
		)
	}
}


export default withRedux(initStore)(WorldMap);
