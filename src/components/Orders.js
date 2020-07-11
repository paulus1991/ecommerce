import React from 'react';
import EmptyOrder from './EmptyOrder';
const divStyle = {
	fontFamily: 'Cormorant Garamond',
};
export default class Orders extends React.Component {
	render() {
		return (
			<div>
				<div className="container text-center">
					{' '}
					<h1 className="text-center" style={divStyle}>
						Orders
					</h1>
					<EmptyOrder></EmptyOrder>
				</div>
			</div>
		);
	}
}
