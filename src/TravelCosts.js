import React from 'react';
import {countryCosts} from './Utils/Data';

const TravelCosts = ({country}) => {

	return (
		<div style={{ height: '40vh'}}>
			<div className='row'>
				<div className='col-xs-6'>
					Accomodation
				</div>
				<div className='col-xs-6'>
					Food
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-6'>
					{countryCosts[country][0]}
				</div>
				<div className='col-xs-6'>
					{countryCosts[country][1]}
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-6'>
					Water
				</div>
				<div className='col-xs-6'>
					Transportation
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-6'>
					{countryCosts[country][2]}
				</div>
				<div className='col-xs-6'>
					{countryCosts[country][3]}
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-6'>
					Entertainment
				</div>
				<div className='col-xs-6'>
					Alcohol
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-6'>
					{countryCosts[country][4]}
				</div>
				<div className='col-xs-6'>
					{countryCosts[country][8]}
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-12'>
					Average daily cost: {countryCosts[country][8] + countryCosts[country][4]}
				</div>
			</div>
		</div>
	)
}

export default TravelCosts;