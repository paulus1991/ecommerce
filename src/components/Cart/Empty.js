import React from 'react';

export default function Empty() {
	const divStyle = {
		fontFamily: 'Cormorant Garamond',
	};
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-10 mx-auto text-center text-title">
					<h2 style={divStyle}>
						You're cart is empty, please add a product in order to proceed with
						your order!
					</h2>
				</div>
			</div>
		</div>
	);
}
