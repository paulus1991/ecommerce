import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import Empty from './Empty';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Carts extends React.Component {
	render() {
		return (
			<section>
				<ProductConsumer>
					{(val) => {
						const { cart } = val;
						if (cart.length > 0) {
							return (
								<React.Fragment>
									<Title name="your" title="cart" />
									<CartColumns></CartColumns>
									<CartList val={val}></CartList>
									<CartTotals value={val} history={this.props.history} />
								</React.Fragment>
							);
						} else {
							return <Empty></Empty>;
						}
					}}
				</ProductConsumer>
			</section>
		);
	}
}
