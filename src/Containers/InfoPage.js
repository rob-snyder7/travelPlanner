import React from 'react';
import { AllAttractions, AllAttractionsImages, AllCities, AllCitiesImages } from '../Utils/Data';
import ScrollBar from 'react-perfect-scrollbar';
import GoogleMap from '../Components/GoogleMap';
import TravelCosts from '../Components/TravelCosts';



const InfoPage = ({country, onBack}) => {

	let attractions = []
	let cities = []
	const numbToDisplay = [0,1,2,3,4,5,6,7,8,9]

	numbToDisplay.forEach(function(element) {
		if (AllAttractions.hasOwnProperty(country)){
			attractions.push(<div className='f2-ns black  pb2'> {AllAttractions[country][element]} </div>)
			attractions.push(<img className='img-responsive mb4' src={AllAttractionsImages[country][element]} />)			
		}
	})

	numbToDisplay.forEach(function(element) {
		if (AllCities.hasOwnProperty(country)){
			cities.push(<div className='f2-ns black  pb2'> {AllCities[country][element]} </div>)
			cities.push(<img className='img-responsive mb4' src={AllCitiesImages[country][element]} />)
		}
	})



	return (

		<div className='vh-100'>
			<div style={{ height: '95vh'}}>
				<div className='bg-light-blue'>
					<p style={{fontSize: '7rem'}} className="black b f1 tc db mb3 mb4-ns bb bw2" title="Home">{country}</p>
				</div>
					<div className="container">
						<div className="row">
							<div className="col-sm-4" style={{ height: '76vh'}}>
									<p className='titles black b'>Attractions</p>
							<ScrollBar>
								{attractions}
							</ScrollBar>
							</div>
							
							
							<div className="col-sm-4" style={{ height: '76vh'}}>
								<p className='titles black b'>Cities</p>
							<ScrollBar>
								{cities}
							</ScrollBar>		
							</div>
							<div className="col-sm-4">
								<TravelCosts country={country}/>
								<GoogleMap country={country}/>
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
