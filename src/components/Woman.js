import React from 'react';
import styled from 'styled-components';
import pic from '../img/womanshop.png';
const divStyle = {
	fontFamily: 'Cormorant Garamond',
};
export default class Woman extends React.Component {
	render() {
		return (
			<div>
				{' '}
				<Styl>
					<div className="container text-center" style={divStyle}>
						{' '}
						<h1>Bugatti Woman Shoes</h1>
						<div className="backpick">
							<img src={pic} alt="woman"></img>
						</div>
					</div>
				</Styl>
			</div>
		);
	}
}

const Styl = styled.div`
	.backpick img {
		width: 100%;
	}
`;
