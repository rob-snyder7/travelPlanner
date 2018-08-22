import React from 'react';
import { AllAttractions, AllAttractionsImages, AllCities, AllCitiesImages } from '../Utils/Data';
import ScrollBar from 'react-perfect-scrollbar';
import GoogleMap from '../Components/GoogleMap';
import TravelCosts from '../Components/TravelCosts';
import MobileNavbar from '../Components/MobileNavbar';


const InfoPage = ({country, onBack}) => {

	let attractions = []
	let cities = []
	const numbToDisplay = [0,1,2,3,4,5,6,7,8,9]

	numbToDisplay.forEach(function(element) {
		if (AllAttractions.hasOwnProperty(country)){
			attractions.push(<div key={element + 'attractions'} className='f2-ns black  pb2'> {AllAttractions[country][element]} </div>)
			attractions.push(<img alt={country} key={element} className='img-responsive mb4' src={AllAttractionsImages[country][element]} />)			
		}
	})

	numbToDisplay.forEach(function(element) {
		if (AllCities.hasOwnProperty(country)){
			cities.push(<div key={element + 'cities'} className='f2-ns black  pb2'> {AllCities[country][element]} </div>)
			cities.push(<img alt={country} key={element} className='img-responsive mb4' src={AllCitiesImages[country][element]} />)
		}
	})



	return (

		<div className='vh-100'>
			<MobileNavbar onBack={onBack} country={country} />
			<div style={{ height: '95vh'}}>
				<div className='countryTitle bg-light-blue'>
					<p  className="f-headline-ns f1 black b tc db mb3 mb4-ns bb bw2" title="Home">{country}</p>
				</div>
					<div className="container">
						<div className="row">
							<div className="col-sm-4 col-xs-12 mainCol">
									<p className='titles black b'>Attractions</p>
							<ScrollBar>
								{attractions}
							</ScrollBar>
							</div>
							
							
							<div className="col-sm-4 col-xs-12 mainCol" >
								<p className='titles black b'>Cities</p>
							<ScrollBar>
								{cities}
							</ScrollBar>		
							</div>
							<div className="col-sm-4 col-xs-12">
								<TravelCosts country={country}/>
								<GoogleMap country={country}/>
							</div>
						</div>
					</div>
			</div>
				<div className='pt3' id='footer'>
					<button onClick={onBack}>Back</button>
				</div>
		</div>
	)
}

export default InfoPage;
