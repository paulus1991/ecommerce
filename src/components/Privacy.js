import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import policy from '../img/Policy.png';
export default class Privacy extends React.Component {
	render() {
		return (
			<Tables>
				<div className="container">
					<div className="main">
						<img src={policy}></img>
					</div>
					<ScrollAnimation animateIn="fadeIn">
						<h2 className="text-center">
							<strong>Table of Contents</strong>
						</h2>

						<div className="table" style={{ textDecoration: 'underline' }}>
							<p>
								1.
								<strong> Data Collection</strong>
							</p>
							<p>
								2.<strong>Personally Identifying Information</strong>
							</p>
							<p>
								3.<strong>Non Personally Identifying Information</strong>
							</p>
							<p>
								4.<strong>Cookies</strong>
							</p>
							<p>
								5.<strong>Your Data Protection Rights</strong>
							</p>
							<p>
								6.<strong>Data Processing Fee</strong>
							</p>
							<p>
								7.<strong>CalOPPA</strong>
							</p>
							<p>
								8.<strong>Contact details</strong>
							</p>
							<p>
								9.<strong>How to contact the data controller</strong>
							</p>
							<p>
								10.<strong>How to Contact our data protection officer</strong>
							</p>
							<p>
								11.<strong>Policy changes</strong>
							</p>

							<p>
								12.<strong>Privacy Policy Example</strong>
							</p>
						</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>DATA COLLECTION</strong>
						</h2>
						<p>
							A clear explanation of what kind of data will be collected from
							the user is a must. It is also required to include how the data is
							collected and where the data is stored and processed. The security
							of the data and how long the data is retained for is also
							required.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong> PERSONALLY IDENTIFYING INFORMATION</strong>{' '}
						</h2>
						<p>
							Your Privacy Policy needs to explain what Personally Identifying
							Information (PII) is. Let your users know what types of PII your
							company/website collects (example: Full name, Street Address,
							birthdate). It is also required for you to explain:
						</p>
						<ul>
							<li>how the information collected is used</li>
							<li>whether the information may be disclosed to third parties</li>
							<li>
								and if so who, how the user can opt in or opt out of personal
								information collection
							</li>
							<li>
								how they can update, restrict or delete their personal
								information
							</li>
							<li>
								how they can request erasure of their personal information.
							</li>
						</ul>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>NON PERSONALLY IDENTIFYING INFORMATION</strong>
						</h2>
						<p>
							Your company/website may also collect Non Personally Identifying
							Information like education status, geo location or IP address. A
							Privacy Policy needs to contain information about what type of
							Non-Personally Identifying Information you collect and how you may
							use this information also.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>COOKIES</strong>
						</h2>
						<p>
							Your Privacy Policy should have a section explaining Cookies. What
							is a cookie? and how does it enables certain functions on your
							website? What types of cookies does your website use and what are
							they used for? and how can your users opt out of them if they
							wish?
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>YOUR DATA PROTECTION RIGHTS</strong>
						</h2>
						<p>
							In alignment with the GDPR, see our article on it here, you must
							outline the data protection rights of your users/customers. The
							rights are as follows:
						</p>
						<ul>
							<li>to be informed</li>
							<li>of access</li>
							<li>rectification</li>
							<li>to be forgotten</li>
							<li>restrict processing</li>
							<li>object to processing</li>
							<li>data portability</li>
							<li>to object to automated processing</li>
						</ul>
						<p>
							Do you think your website doesn’t require these rights to be
							included in your Privacy Policy because you are not in the EU? If
							you have any users or customers in the EU then this law applies to
							you.
						</p>
					</ScrollAnimation>

					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>DATA PROCESSING FEE</strong>
						</h2>
						<p>
							You must let your users/customers know if there may be a
							processing fee for any of their requests involving their data. In
							most cases a fee won’t apply but you must inform them of the
							chance there may be one.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>CALOPPA</strong>
						</h2>
						<p>
							California Privacy Rights, is law under California Civil Code
							Section 1798.83 which permits Californian residents to request and
							obtain from a company/website any information regarding the
							disclosure of their personally identifying information to third
							parties for direct marketing purposes.
						</p>
						<p>
							CalOPPA also states that any user of the website under the age of
							18, may request to have any content or information they have
							publicly posted removed under applicable laws.
						</p>
						<p>
							Make contact details available to your users so they can easily
							make requests involving their data.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>CONTACT DETAILS</strong>
						</h2>
						<p>
							You must put the company contact details in your privacy policy
							statement in order for your users to be able to contact you
							easily.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>HOW TO CONTACT THE DATA CONTROLLER</strong>
						</h2>
						<p>
							Under the GDPR you must have contact details for the data
							controller officer made available in your Privacy Policy.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>HOW TO CONTACT OUR DATA PROTECTION OFFICER</strong>
						</h2>
						<p>
							Contact detail for the data protection officer are to be made
							available in your privacy policy under the GDPR.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>POLICY CHANGES</strong>
						</h2>
						<p>
							Let your users know how they can be aware of changes you make to
							your Privacy Policy.
						</p>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn">
						<h2>
							<strong>PRIVACY POLICY EXAMPLE</strong>
						</h2>
						<p>
							Most free Privacy Policies are not GDPR or CalOPPA compliant.
							Below is an example of the Free Privacy Policy we offer.
						</p>
					</ScrollAnimation>
				</div>
			</Tables>
		);
	}
}

const Tables = styled.div`
	.table {
		font-size: 1.3rem;
	}
	.main img {
		width: 100%;
	}
`;
