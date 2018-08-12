import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { countryAttractions, countryAttractionsImages, countryCities, countryCitiesImages } from './Data';
import ScrollBar from 'react-perfect-scrollbar';
import './InfoPage.css';
import GoogleMap from './GoogleMap';



const InfoPage = ({country, onBack}) => {

	let attractions = []
	let cities = []
	const numbToDisplay = [0,1,2,3,4,5,6,7,8,9]

	numbToDisplay.forEach(function(element) {
		attractions.push(<div> {countryAttractions[country][element]} </div>)
		attractions.push(<img className='img-responsive' src={countryAttractionsImages[country][element]} />)
	})

	numbToDisplay.forEach(function(element) {
		cities.push(<div> {countryCities[country][element]} </div>)
		cities.push(<img className='img-responsive' src={countryCitiesImages[country][element]} />)
	})

	const hold = countryAttractions['Austria'][0]

	return (

		<div className='vh-100'>
	
			{country}
				<div className="container">
					<div className="row">
						<div className="col-sm-4 vh-75">
						top attractions
						<ScrollBar>
							{attractions}
						</ScrollBar>
						</div>
						
						
						<div className="col-sm-4 vh-75">
						top cities
						<ScrollBar>
							{cities}
						</ScrollBar>		
						</div>
						<div className="col-sm-4">
						<GoogleMap />
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4 col-xs-offset-8">
						top cities
						</div>
					</div>
				</div>

			<button onClick={onBack}>Back</button>
			
		</div>
	)
}

export default InfoPage;
