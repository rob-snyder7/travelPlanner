import React from 'react';
import {countryCosts} from '../Utils/Data';
import './TravelCosts.css';

const TravelCosts = ({country}) => {

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
					{countryCosts[country][0]}
				</div>
				<div className='costValue col-xs-4 col-xs-offset-2'>
					{countryCosts[country][1]}
				</div>
			</div>
			<div className='row'>
				<div className='costName col-xs-4 col-xs-offset-1'>
					Water
				</div>
				<div className='costName col-xs-4 col-xs-offset-2'>
					Transportation
				</div>
			</div>
			<div className='row'>
				<div className='costValue col-xs-4 col-xs-offset-1'>
					{countryCosts[country][4]}
				</div>
				<div className='costValue col-xs-4 col-xs-offset-2'>
					{countryCosts[country][3]}
				</div>
			</div>
			<div className='row'>
				<div className='costName col-xs-4 col-xs-offset-1'>
					Entertainment
				</div>
				<div className='costName col-xs-4 col-xs-offset-2'>
					Alcohol
				</div>
			</div>
			<div className='row'>
				<div className='costValue col-xs-4 col-xs-offset-1'>
					{countryCosts[country][5]}
				</div>
				<div className='costValue col-xs-4 col-xs-offset-2'>
					{countryCosts[country][8] + countryCosts[country][4]}
				</div>
			</div>
			<div className='row'>
				<div className='costName col-xs-4 col-xs-offset-1'>
					Total
				</div>
				<div className='costName col-xs-4 col-xs-offset-2'>
					Priciness (1 - 10)
				</div>
			</div>
			<div className='row'>
				<div className='costValue col-xs-4 col-xs-offset-1'>
					{countryCosts[country][8] + countryCosts[country][4]}
				</div>
				<div className='costValue col-xs-4 col-xs-offset-2'>
					123
				</div>
			</div>
		</div>
	)
}

export default TravelCosts;