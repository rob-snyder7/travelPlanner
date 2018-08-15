import React from 'react';
import { costData } from '../Utils/Data';
import './TravelCosts.css';

const TravelCosts = ({country}) => {

	if (costData.hasOwnProperty(country)) {
		return (
			<div className='' style={{ height: '45.2vh'}}>
				<div className='row'>
					<p className='costTitle titles black b'>Daily Costs</p>
				</div>
				<div className='row'>
					<div className='costName col-xs-4 col-xs-offset-1'>
						Accomodation
					</div>
					<div className='costName col-xs-4 col-xs-offset-2'>
						Food
					</div>
				</div>
				<div className='row'>
					<div className='costValue col-xs-4 col-xs-offset-1'>
						{costData[country][9] + costData[country][0]}
					</div>
					<div className='costValue col-xs-4 col-xs-offset-2'>
						{costData[country][9] + costData[country][1]}
					</div>
				</div>
				<div className='row'>
					<div className='costName col-xs-4 col-xs-offset-1'>
						Alcohol
					</div>
					<div className='costName col-xs-4 col-xs-offset-2'>
						Transportation
					</div>
				</div>
				<div className='row'>
					<div className='costValue col-xs-4 col-xs-offset-1'>
						{costData[country][9] + costData[country][8]}
					</div>
					<div className='costValue col-xs-4 col-xs-offset-2'>
						{costData[country][9] + costData[country][3]}
					</div>
				</div>
				<div className='row'>
					<div className='costName col-xs-4 col-xs-offset-1'>
						Entertainment
					</div>
					<div className='costName col-xs-4 col-xs-offset-2'>
						Total
					</div>
				</div>
				<div className='row'>
					<div className='costValue col-xs-4 col-xs-offset-1'>
						{costData[country][9] + costData[country][4]}
					</div>
					<div className='costValue col-xs-4 col-xs-offset-2'>
						{costData[country][9] + costData[country][10]}
					</div>
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