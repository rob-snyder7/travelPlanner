import React from 'react';
import { costData } from '../Utils/Data';
import './TravelCosts.css';

const TravelCosts = ({country}) => {

	let costBoxes = []
	const typeCosts = ['Accomodation', 'Food', 'Alcohol', 'Transportation', 'Alcohol','Total']
	const referenceCosts = [0,1,8,3,4,10].map(x => costData[country][9] + costData[country][x])

	for(var i = 0; i < 5; i+=2){
		costBoxes.push((
			<div>
				<div className='row'>
					<div className='costName col-xs-4 col-xs-offset-1'>
						{typeCosts[i]}
					</div>
					<div className='costName col-xs-4 col-xs-offset-2'>
						{typeCosts[i+1]}
					</div>
				</div>
				<div className='row'>
					<div className='costValue col-xs-4 col-xs-offset-1'>
						{referenceCosts[i]}
					</div>	
					<div className='costValue col-xs-4 col-xs-offset-2'>
						{referenceCosts[i+1]}
					</div>
				</div>
			</div>
			))
	}


	if (costData.hasOwnProperty(country)) {
		return (
			<div style={{ height: '45.2vh'}}>
				<div className='row'>
					<p className='costTitle titles black b'>Daily Costs</p>
				</div>
				<div>
					{costBoxes[0]}
					{costBoxes[1]}
					{costBoxes[2]}
				</div>
			</div>
		)
	} else {
		return (
			<div style={{ height: '45.2vh'}}>
				No Costs!
			</div>
			)
	}
}


export default TravelCosts;