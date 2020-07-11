import React from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class Details extends React.Component {
	render() {
		const divStyle = {
			fontFamily: 'Cormorant Garamond',
		};
		return (
			<Stylus>
				<ProductConsumer>
					{(value) => {
						const { id, info, price, img, title, inCart } = value.detailProduct;
						return (
							<div className="container py-5">
								<div className="row">
									<div className="tit col-10 mx-auto text-center text-slanted text-blue my-5">
										<h1 style={divStyle}>{title}</h1>
									</div>
								</div>
								<div className="row">
									<div className=" zoom col-10 mx-auto col-md-6 my-3 text-capitalize">
										<img
											src={img}
											alt="shoe product"
											className="img-fluid"
										></img>
									</div>
									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
										<h1 style={divStyle}>Group :{title}</h1>
										<h4 className="text-danger">
											<strong>
												Price : <span>RON </span>
												{price}{' '}
											</strong>
										</h4>
										<p className="text-capitalize font-weight-bold mt-3 mb-0">
											Delivery in 2-3 working days!
										</p>
										<p className="text-muted lead">{info}</p>
										<div className="">
											<Link to="/products">
												<ButtonContainer>Back to Shop</ButtonContainer>
											</Link>{' '}
											<ButtonContainer
												cart
												disabled={inCart ? true : false}
												onClick={() => {
													value.addToCart(id);
													value.openModal(id);
												}}
											>
												{inCart ? 'Already in Cart! ' : 'Add to Cart'}
											</ButtonContainer>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</ProductConsumer>
			</Stylus>
		);
	}
}

const Stylus = styled.div`
	.zoom:hover {
		transition: all 2s ease;
		-ms-transform: scale(1.25); /* IE 9 */
		-webkit-transform: scale(1.25); /* Safari 3-8 */
		transform: scale(1.25);
	}
`;
