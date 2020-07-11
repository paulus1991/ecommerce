import React from 'react';
import woman from '../img/woman.png';
export default class BugattiWoman extends React.Component {
	render() {
		return (
			<div>
				<div className="container main mx-auto img-fluid">
					<img src={woman} alt="woman" style={{ width: '100%' }}></img>
				</div>
				<h2 className="text-center">
					Bugatti shoes for women Spring/Summer 2020 – Trends and Highlights
				</h2>
				<div className="container" style={{ background: '#E8E8E8' }}>
					<strong>bugatti casual – stylish steps, flirty comfort</strong>
					<p>
						<i>
							On trend chunky sneakers and sandals, playing with colors and
							ornamentations in the new Casual collection will make you feel
							good about yourself, living the high life.
						</i>
					</p>
					<strong>Stylish steps on pretty assembles</strong>
					<p>
						Simple ankle strap sandals and slides are beautified with
						ostentative glint and glitterific splendor on leather uppers. To the
						whole ensemble we added snake prints and crochet designs with
						elasticated bands and velcro-closure, so that you grow in love with
						them even more.
					</p>
					<strong>Flirty comfort and cute vibes</strong>
					<p>
						Serving you comfort, the hot shoe tendency consists in dope neon
						translucent panels, with classy lace up and knitted textures on
						thick soles creating statement sneakers, with fancy cut-outs and
						animal prints. Varnished and suede uppers play along with logo
						detailing and meshed segments.{' '}
					</p>
					<strong>bugatti city – new heights, chunky all the way</strong>
					<p>
						<i>
							We brought heels to a magnificent rank in the City collection,
							together with platform sandals, offering comfortable fit and extra
							height. Designer sneakers have made their check-in as well,
							accomplishing a glit-edge loveliness.{' '}
						</i>
					</p>
					<strong>The new heights spin</strong>
					<p>
						Pumps are the absolute fashion trend, with extravagant metallic
						snakeskin, embellishing suede and leather uppers. Adorable sandals
						are ascended on high platforms or on charming block heels, while
						others rest on flat soles, with strass ornamentions to spice things
						up!
					</p>
					<strong>Chunky all the way to the top!</strong>
					<p>
						Updated versions of the classic sneakers with fun prints and
						punctures, keeping it voguish through delightful glance and weaving
						dress-ups are laid-down on chunky soles, some with translucent
						impact. They are inspired from the street breeding, merging with
						retro style to add a fresh note to the collection.
					</p>
				</div>
			</div>
		);
	}
}
