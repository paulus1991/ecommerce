import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../src/context';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
	render() {
		const { id, title, img, price, inCart } = this.props.prod;
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6- col-lg-3 my-3">
				<div className="card">
					<ProductConsumer>
						{(value) => (
							<div
								className="img-container p-5"
								onClick={() => value.handleDetail(id)}
							>
								<Link to="/details">
									<img
										src={img}
										alt="shoe product"
										className="card-img-top"
									></img>
								</Link>
								<button
									className="cart-btn"
									disabled={inCart ? true : false}
									onClick={() => {
										value.addToCart(id);
										value.openModal(id);
									}}
								>
									{' '}
									{inCart ? (
										<p className="text-capitalize mb-0" disabled>
											In Cart!
										</p>
									) : (
										<i className="fas fa-cart-arrow-down"></i>
									)}
								</button>
							</div>
						)}
					</ProductConsumer>
					<div className="card-footer d-flex justify-content-between ">
						<p className="align-self-center mb-0">{title}</p>
						<h5 className="text-blue font-italic mb-0">
							<span className="mr-1">RON</span>
							{price}
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
	}).isRequired,
};
const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 1s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 1s linear;
	}
	&:hover {
		.card {
			border: 0.05rem solid black;
			box-shadow: 2px 2px 5px 0px gray;
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 1s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: black;
		color: var(--mainWhite);
		font-size: 1.4rem;
		transform: translate(100%, 100%);
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
		transition: all 0.4s linear;
	}
`;
