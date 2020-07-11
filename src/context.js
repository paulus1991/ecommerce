import React from 'react';
import { detailProduct, storeData } from './data';
const ProductContext = React.createContext();
export default class ProductProvider extends React.Component {
	state = {
		products: [],
		detailProduct: detailProduct,
		cart: [],
		modalOpen: false,
		modalProduct: detailProduct,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
	};
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let temproducts = [];
		storeData.forEach((item) => {
			const singleItem = { ...item };
			temproducts = [...temproducts, singleItem];
		});
		this.setState(() => {
			return { products: temproducts };
		});
	};
	getItem = (id) => {
		const product = this.state.products.find((item) => item.id === id);
		return product;
	};
	handleDetail = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};
	addToCart = (id) => {
		let temproducts = [...this.state.products];
		const index = temproducts.indexOf(this.getItem(id));
		const product = temproducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;
		this.setState(
			() => {
				return { products: temproducts, cart: [...this.state.cart, product] };
			},
			() => {
				this.addTotals();
			}
		);
	};
	openModal = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return { modalProduct: product, modalOpen: true };
		});
	};
	closeModal = () => {
		this.setState(() => {
			return { modalOpen: false };
		});
	};
	increment = (id) => {
		let tempCart = [...this.state.cart];
		const product = tempCart.find((item) => item.id === id);
		const index = tempCart.indexOf(product);
		const prod = tempCart[index];
		prod.count = prod.count + 1;
		prod.total = prod.count * prod.price;
		this.setState(
			() => {
				return { cart: [...tempCart] };
			},
			() => {
				this.addTotals();
			}
		);
	};
	decrement = (id) => {
		let tempCart = [...this.state.cart];
		const product = tempCart.find((item) => item.id === id);
		const index = tempCart.indexOf(product);
		const prod = tempCart[index];
		prod.count = prod.count - 1;
		if (prod.count === 0) {
			this.remove(id);
		} else {
			prod.total = prod.count * prod.price;
			this.setState(
				() => {
					return { cart: [...tempCart] };
				},
				() => {
					this.addTotals();
				}
			);
		}
	};
	remove = (id) => {
		let tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];
		tempCart = tempCart.filter((item) => item.id !== id);
		const index = tempProducts.indexOf(this.getItem(id));
		let rem = tempProducts[index];
		rem.count = 0;
		rem.total = 0;
		rem.inCart = false;
		this.setState(
			() => {
				return { cart: [...tempCart], products: [...tempProducts] };
			},
			() => {
				this.addTotals();
			}
		);
	};

	clearCart = () => {
		this.setState(
			() => {
				return { cart: [] };
			},
			() => {
				this.setProducts();
				this.addTotals();
			}
		);
	};
	addTotals = () => {
		let subTotal = 0;
		this.state.cart.map((item) => (subTotal += item.total));
		const tempTax = subTotal * 0.19;
		const tax = parseFloat(tempTax.toFixed(3));
		const total = subTotal + tax;
		this.setState(() => {
			return {
				cartSubTotal: subTotal,
				cartTax: tax,
				cartTotal: total,
			};
		});
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					remove: this.remove,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
