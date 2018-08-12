import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const InfoPage = ({country, onBack}) => {
	return (
		<div>
			{country}
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
						top attractions
						</div>
						<div className="col-sm-8">
						gallery
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4">
						top cities
						</div>
						<div className="col-sm-4">
						cost (hostels, food)
						</div>
						<div className="col-sm-4">
						flight prices
						</div>
					</div>
				</div>

			<button onClick={onBack}>Back</button>
			
		</div>
	)
}

export default InfoPage;

// <Grid>
//   <Row className="show-grid">
//     <Col xs={12} md={8}>
//       <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
//     </Col>
//     <Col xs={6} md={4}>
//       <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
//     </Col>
//   </Row>

//   <Row className="show-grid">
//     <Col xs={6} md={4}>
//       <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
//     </Col>
//     <Col xs={6} md={4}>
//       <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
//     </Col>
//     <Col xsHidden md={4}>
//       <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
//     </Col>
//   </Row>

//   <Row className="show-grid">
//     <Col xs={6} xsOffset={6}>
//       <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
//     </Col>
//   </Row>

//   <Row className="show-grid">
//     <Col md={6} mdPush={6}>
//       <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
//     </Col>
//     <Col md={6} mdPull={6}>
//       <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
//     </Col>
//   </Row>
// </Grid>;