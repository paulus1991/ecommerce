import React from 'react';
import Product from '../Product';
import Title from './Title';
import ScrollAnimation from 'react-animate-on-scroll';
import { ProductConsumer } from '../context';
import pic from '../img/manbug.png';
import styled from 'styled-components';
const divStyle = {
	fontFamily: 'Cormorant Garamond',
};
export default class Man extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Styl>
					<div className="py-5">
						<div className="container">
							<h1 className="text-center" style={divStyle}>
								Bugatti shoes man
							</h1>
							<div className="backpick">
								<img src={pic} alt="pic1"></img>
							</div>
							<ScrollAnimation
								animateIn="bounceInRight"
								animateOut="bounceOutLeft"
							></ScrollAnimation>
						</div>
					</div>
				</Styl>
			</React.Fragment>
		);
	}
}

const Styl = styled.div`
	.backpick img {
		width: 100%;
	}
`;
