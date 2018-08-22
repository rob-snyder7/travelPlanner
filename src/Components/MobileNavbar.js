import React from 'react';

const MobileNavbar = ( {onBack, country} ) => {
	return (
		<div className="navDisplay" style={{marginBottom: '11vh'}}>
			<nav style={{height: '9.5vh'}} className="navbar navbar-default navbar-fixed-top">
			  <div style={{height: '100%'}} className="bb bw2 container">
			   	<a onClick={onBack} className="col-xs-1 pt3 black b navbar-left">Back</a>
			   	<p className='countryMob col-xs-10 black b tc'>{country}</p>
			   	<p className='col-xs-1'></p>
			  </div>
			</nav>
		</div>
	)
}

export default MobileNavbar;