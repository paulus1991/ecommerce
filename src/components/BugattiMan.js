import React from 'react';
import styled from 'styled-components';
import man from '../img/man.png';
export default class BugattiMan extends React.Component {
	render() {
		return (
			<BugattiManStyle>
				<div className=" container main mx-auto img-fluid">
					<img src={man} alt="man"></img>
				</div>

				<h3 className="text-center">
					{' '}
					Bugatti shoes for men Spring/Summer 2020 – Trends and Highlights
				</h3>
				<div className=" container" style={{ background: '#E8E8E8' }}>
					<strong>
						Bugatti City – exclusive everyday, take on the world, here to
						conquer
					</strong>
					<p>
						<i>
							We have you covered with our new City collection, focused on
							pieces that are perfect choices for the office and for the weekend
							and for any other event in between.
						</i>
					</p>
					<strong>Be exclusive everyday with derby shoes</strong>
					<p>
						Electing the ideal footwear is now easier, when you have so many
						options! Own a cozy style with a pair of timeless derby shoes in
						many varieties. Crafted in smooth leather or in suede versions, with
						distinctive patterns and trimmed punched holes, with decorative
						stitching or brogue adornment, they make the perfect pair for a
						smart and slightly polished look.
					</p>
					<strong>Taking on the world !</strong>
					<p>
						The comfort that loafers are providing is real. By combining
						functionality with cool figure, you add casual elegance to your
						wardrobe. With stitches forming an apron along the shoe’s front,
						tiny perforations and heel feature, they will convert you in a
						fashion legend.
					</p>
					<strong>Here to conquer</strong>
					<p>
						With a distinct styling, leather sneakers are designed to make you
						noticeable. Embellished with pierced uppers and a first-class touch,
						they boost someone’s statement.
					</p>
					<h3 className="text-center">
						Bugatti denim – fashion leading, tremendous choices
					</h3>
					<p>
						<i>
							{' '}
							Amazingly versatile, our Denim collection meets your needs of high
							comfort through epic basic frames with a smart metropolitan
							accent.{' '}
						</i>
					</p>
					<strong>Fashion leading summer</strong>
					<p>
						Men slides and sandals are a summer’s classic. Kick in with
						criss-crossed designs for the outdoorsy cast and take a safe bet on
						yourself. Both practical and fresh, with toe exposing and mighty
						soft insole cushions – perfectly molded to increase your feet
						comfort, they are likely to make a modern testimony.{' '}
					</p>
					<h3 className="text-center">
						Bugatti sport – athleisure loop, ultra-light{' '}
					</h3>
					<p>
						{' '}
						<i>
							The sport collection from bugatti is taking comfort to a whole new
							level with our lifestyle sport shoes, designed with athletic
							constitution.
						</i>
					</p>

					<p>
						<strong>Entertain the athleisure ground </strong>
					</p>

					<p>
						It’s up to you how you pair our low profile sneakers with a modern
						edge. Built on an ageless trend of athleisure, running shoes became
						so popular nowadays! Comfortable shoes make the best runners and we
						know that! We crafted a pair for every activity. Designed with that
						sporty vibe, our athletic footwear goes with everything, preventing
						sport injury with cushioned shock absorption that diminishes impact
						and helps you achieve the best performance everytime.
					</p>
					<strong>Ultra-light </strong>
					<p>
						These athletic kicks are designed with easy soles to ensure that
						relaxed feel with reliable protection. The soft footbeds provide
						secure fit, preventing friction, while our sport sneakers are
						crafted to enhance energy, strength and endurance.
					</p>
				</div>
			</BugattiManStyle>
		);
	}
}

const BugattiManStyle = styled.div`
	.main img {
		width: 100%;
	}
`;
