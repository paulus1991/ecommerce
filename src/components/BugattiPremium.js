import React from 'react';
import styled from 'styled-components';
import premium from '../img/premium.png';

import premium3 from '../img/premium3.png';
export default class BugattiPremium extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">
					bugatti Premium – Traditional craftsmanship meets modern design
				</h1>
				<div className="container">
					<p style={{ background: '#e8e8e8', fontSize: '1rem' }}>
						An even cleaner design signature, even better quality materials –
						the brand new bugatti Premium Collection is like a best of the best
						for the beloved brand. The premiere collection, which consists of 40
						select items for modern, quality-conscious gentlemen , will be
						available in select stores. When it comes to sophisticated products,
						there are three essential ingredients: Quality, care and expertise.
						Exclusive models from the bugatti Premium Collection are made of the
						highestquality leather, and finished with true craftsmanship.
						Whether lambs wool, Sympatex, Exko, Flex leather soles or very soft
						– and in some cases exchangeable – soles, the collection fulfills
						our premium claim down to the last detail.
					</p>
					<img
						className="main img-fluid mt-4 mx-auto text-center"
						src={premium}
						alt="premium"
					></img>

					<img
						className="main img-fluid mt-4 mx-auto text-center"
						src={premium3}
						alt="premium3"
					></img>
				</div>
			</div>
		);
	}
}

const stylus = styled.div`
	.main {
		width: 100%;
	}
`;
