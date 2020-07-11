import React from 'react';
const divStyle = {
	fontSize: 25,
	fontFamily: 'Cormorant Garamond',
};
export default function CartColumns() {
	return (
		<div className="container-fluid text-center d-none d-lg-block">
			<div className="row   " style={divStyle}>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Products</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Name</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Price</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Quantity</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Remove</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Total</p>
				</div>
			</div>
		</div>
	);
}
