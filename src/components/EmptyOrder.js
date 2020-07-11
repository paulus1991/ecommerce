import React from 'react';

export default function EmptyOrder() {
	const divStyle = {
		fontFamily: 'Cormorant Garamond',
	};
	return (
		<div>
			<h3 style={divStyle}>There are no placed orders,please add a Order!</h3>
		</div>
	);
}
