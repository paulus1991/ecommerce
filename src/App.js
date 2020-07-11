import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Home from './components/Home';
import Details from './components/Details';
import Carts from './components/Cart/Carts';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import About from './components/About';
import BugattiMan from './components/BugattiMan';
import BugattiWoman from './components/BugattiWoman';
import BugattiPremium from './components/BugattiPremium';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import SiteMap from './components/SiteMap';
import Man from './components/Man';
import Woman from './components/Woman';
import Orders from './components/Orders';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route path="/products" component={ProductList}></Route>
				<Route path="/details" component={Details}></Route>
				<Route path="/cart" component={Carts}></Route>
				<Route path="/about" component={About}></Route>
				<Route path="/bugattiman" component={BugattiMan}></Route>
				<Route path="/bugattiwoman" component={BugattiWoman}></Route>
				<Route path="/bugattipremium" component={BugattiPremium}></Route>
				<Route path="/contact" component={Contact}></Route>
				<Route path="/privacy" component={Privacy}></Route>
				<Route path="/sitemap" component={SiteMap}></Route>
				<Route path="/man" component={Man}></Route>
				<Route path="/woman" component={Woman}></Route>
				<Route path="/orders" component={Orders}></Route>
				<Route component={Default}></Route>
			</Switch>
			<Modal />
			<Footer />
		</React.Fragment>
	);
}

export default App;
