import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import sitemap from '../img/sitemap.png';
class SiteMap extends React.Component {
	render() {
		return (
			<Styles>
				<div className="container">
					<div className="sitemap">
						<img src={sitemap}></img>
					</div>
					<h2 className="text-center">
						You can find us also here to our local Store :
					</h2>
					<p>
						<img src="https://img.icons8.com/fluent/48/000000/shop.png" />
						General Gheorghe Mărdărescu nr.7, Oradea 410605{' '}
					</p>
					<div className="glyphicon glyphicon-earphone">
						<img src="https://img.icons8.com/fluent/48/000000/phone.png"></img>
						0359 410 560
					</div>

					<div className=" map text-center ">
						<Map
							className={'contactmap'}
							google={this.props.google}
							zoom={17}
							initialCenter={{
								lat: 47.0834348,
								lng: 21.8799129,
							}}
						>
							<Marker onClick={this.onMarkerClick} name={'Current location'} />

							<InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
						</Map>
					</div>
				</div>
			</Styles>
		);
	}
}
export default GoogleApiWrapper({
	apiKey: 'AIzaSyC_PsnzosFoGN7LMHdifvKs-H24Nz4MU_Y',
})(SiteMap);

const Styles = styled.div`
	.map {
		margin-bottom: 620px;
	}
	.contactmap {
		min-width: 340px;
		max-width: 50% !important;
		height: 50% !important;
		margin: auto !important;
	}
	.sitemap img {
		width: 100%;
	}
`;
