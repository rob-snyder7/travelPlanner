import React from 'react';
import { countryAttractions, countryAttractionsImages, countryCities, countryCitiesImages } from './Utils/Data';
import ScrollBar from 'react-perfect-scrollbar';
import GoogleMap from './GoogleMap';
import TravelCosts from './TravelCosts';



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
			<div style={{ height: '95vh'}}>
				{country}
					<div className="container">
						<div className="row">
							<div className="col-sm-4" style={{ height: '90vh'}}>
							top attractions
							<ScrollBar>
								{attractions}
							</ScrollBar>
							</div>
							
							
							<div className="col-sm-4" style={{ height: '90vh'}}>
							top cities
							<ScrollBar>
								{cities}
							</ScrollBar>		
							</div>
							<div className="col-sm-4 pt4">
								<GoogleMap country={country}/>
								<TravelCosts country={country}/>
							</div>
						</div>
					</div>
			</div>
				<div className='pt3'>
					<button onClick={onBack}>Back</button>
				</div>
		</div>
	)
}

export default InfoPage;
