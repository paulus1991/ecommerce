import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/bugatti_signet_black.png';
import buy from '../img/shopping-bag.png';
import styled from 'styled-components';
import { ButtonContainer, NavWrapper } from './Button';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class NavBar extends React.Component {
	render() {
		return (
			<Styles>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Link to="/">
						<img src={logo} alt="store" className="navbar-brand" />
					</Link>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							
							<Nav.Link href="/orders">Orders</Nav.Link>

							<NavDropdown title="Segments" id="collasible-nav-dropdown">
								<NavDropdown.Item href="/man">Bugatti man</NavDropdown.Item>
								<NavDropdown.Item href="/woman">Bugatti woman</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					<Link to="/cart" className="main ml-auto">
						<ButtonContainer>
							<span className="btn mr-0">
								<img src={buy} alt="buy"></img>
							</span>
						</ButtonContainer>
					</Link>
				</Navbar>
				{/* <nav
					style={{ backgroundColor: '#708090' }}
					className="navbar navbar-dark   "
				>
					<Link to="/">
						<img src={logo} alt="store" className="navbar-brand" />
					</Link>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5">
							<Link to="/products" className="nav-link">
								Shop
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5">
							<Link to="/man" className="nav-link">
								Bugatti Man
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5">
							<Link to="/woman" className="nav-link">
								Bugatii Woman
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5">
							<Link to="/orders" className="nav-link">
								My Orders
							</Link>
						</li>
					</ul>

					<Link to="/cart" className="main ml-auto">
						<ButtonContainer>
							<span className="btn mr-0">
								<img src={buy} alt="buy"></img>
							</span>
						</ButtonContainer>
					</Link>
				</nav> */}
			</Styles>
		);
	}
}

const Styles = styled.div`
	.main {
		padding: -15px !important;
		opacity: 0.9;
	}
	.btn img {
		width: 20px;
		margin: -9px !important;
		background: transparent !important;
	}
`;
