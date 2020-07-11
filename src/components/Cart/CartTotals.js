import React from 'react';
import { Link } from 'react-router-dom';
import PayPal from './PayPal';
export default function CartTotals({ value, history }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						{' '}
						<Link to="/products">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								type="button"
								onClick={() => clearCart()}
							>
								Clear Cart
							</button>
						</Link>
						<h5>
							<span className="text-blue">Subtotal :</span>
							<strong>RON {cartSubTotal}</strong>
						</h5>
						<h5>
							<span className="text-blue">Tax :</span>
							<strong>RON {cartTax}</strong>
						</h5>
						<h5>
							<span className="text-blue">Total :</span>
							<strong>RON {cartTotal}</strong>
						</h5>
						<PayPal
							history={history}
							total={cartTotal}
							clearCart={clearCart}
						></PayPal>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
