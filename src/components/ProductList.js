import React from 'react';
import Product from '../Product';
import Title from './Title';
import ScrollAnimation from 'react-animate-on-scroll';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import pic from '../img/store.png';
const divStyle = {
	fontFamily: 'Cormorant Garamond',
};
export default class ProductList extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Styl>
					<div className="py-5">
						<div className="container">
							<h1 className="text-center" style={divStyle}>
								Bugatti shoes Oradea
							</h1>
							<div className="backpick">
								<img src={pic} alt="pic1"></img>
							</div>
							<ScrollAnimation
								animateIn="bounceInRight"
								animateOut="bounceOutLeft"
							>
								<div className="row">
									<ProductConsumer>
										{(val) => {
											return val.products.map((prod) => {
												return <Product key={prod.id} prod={prod} />;
											});
										}}
									</ProductConsumer>
								</div>
							</ScrollAnimation>
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
