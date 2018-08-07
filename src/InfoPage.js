import React from 'react';

const InfoPage = ({country, onBack}) => {
	return (
		<div>
			woooooo
			{country}
			<button onClick={onBack}>
				Back
			</button>
		</div>
	)
}

export default InfoPage;