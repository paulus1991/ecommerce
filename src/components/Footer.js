import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
export default class Footer extends React.Component {
	render() {
		return (
			<div className="main">
				<footer className="site-footer">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-6">
								<h6>About</h6>
								<p className="text-justify">
									This is our official Oradea shoes Website from bugatti man and
									woman.
								</p>
							</div>

							<div className="col-xs-6 col-md-3">
								<h6>Categories</h6>
								<ul className="footer-links">
									<li>
										<Link to="/bugattiman">Bugatti Man</Link>
									</li>
									<li>
										<Link to="/bugattiwoman">Bugatti Woman</Link>
									</li>
									<li>
										<Link to="/bugattipremium">Bugatti Premium</Link>
									</li>
								</ul>
							</div>

							<div className="col-xs-6 col-md-3">
								<h6>Quick Links</h6>
								<ul className="footer-links">
									<li>
										<Link to="/about">About Us</Link>
									</li>
									<li>
										<Link to="/contact"> Contact</Link>
									</li>

									<li>
										<Link to="/privacy">Privacy Policy</Link>
									</li>
									<li>
										<Link to="/sitemap">Sitemap</Link>
									</li>
								</ul>
							</div>
						</div>
						<hr />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-sm-6 col-xs-12">
								<p className="copyright-text">
									Copyright 2020 All Rights Reserved by Oradea Shoes!
								</p>
							</div>

							<div className="col-md-4 col-sm-6 col-xs-12">
								<ul className="social-icons">
									<li>
										<a
											className="facebook"
											href="https://www.facebook.com/bugattishoesofficial/"
										>
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a
											className="twitter"
											href="https://www.instagram.com/bugatti_fashion_official/"
										>
											<i className="fab fa-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
