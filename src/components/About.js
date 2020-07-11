import React from 'react';
import styled from 'styled-components';
import Beginning from '../img/About/1928.png';
import continued from '../img/About/continued.png';
import tim from '../img/About/80.png';
import early from '../img/About/90.png';
import late from '../img/About/late90.png';
import milenium from '../img/About/2000.png';
import future from '../img/About/2013.png';
import story from '../img/About/history.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
export default class About extends React.Component {
	render() {
		return (
			<Style>
				<div className=" container text-center">
					<div className="  story">
						<img src={story} alt="story"></img>
					</div>
					<div className="main">
						<ScrollAnimation animateIn="fadeIn">
							<h2 className="text-center">1928-The Beginning</h2>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<p>
								AstorMueller is in the shoe industry since 1928 when the present
								Chairman Tim T. Müllers grandfather Johann Müller established
								the „Werkstatt Johann Müller for customized shoes“.
							</p>
							<img src={Beginning} alt="beginning"></img>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<h2 className="pt-5">
								1950s, 1960s, 1970s – Continue the tradition
							</h2>
							<p>
								His father Hans Müller together with his wife Britta Müller
								continued the shoe maker tradition with the Astormüller Footwear
								Agency producing fine Italian and Portuguese shoe
							</p>
							<img src={continued} alt="story continues"></img>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<h2 className="pt-5">80s – Towards new shores</h2>
							<p>
								Tim T. Müller and his brother Oliver Müller also followed these
								footsteps and started 1984 their education in the growing family
								shoe business.
							</p>
							<img src={tim} alt="80's"></img>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<h2>Early 90s – Big business ahead </h2>
							<p>
								1990 Tim T. Müller becomes Chairman and 100% shareholder of the
								family business and started to realize a tremendous growth based
								on consequent alignment to consumers needs and future markets.
								The head office of the AM company is now located in Pirmasens -
								the former German capital of shoe manufacturers.
							</p>
							<img src={early} alt="early"></img>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<h2>Late 90s - The wind of change</h2>
							<p>
								In the Nineties lasts are developed by renowned German-Italian
								last manufacturer and the production is based on traditional
								constructions using exclusively the best qualities of leathers.
								Tim T. Müller launches up to 8 collections every year
								anticipating the changing requirements of the retail industry.
								To be quite close to the Italian devolpement center as well as
								to the German core market 1999 the AstorMueller AG was founded
								in Switzerland and the company moved to the Swiss town Hünenberg
								near Zurich.
							</p>
							<img src={late} alt="late 90s"></img>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<h2>2000 – Start into the new millenium</h2>
							<p>
								In 2000 the bugatti licence was acquired. The first Shop-in-Shop
								systems are implementated with specialized shoe retailer. In ths
								decade various comfort features and comfort themes as SOFT GEL
								and GENIAL INSOLE are developed to meet the customers needs of
								modern and and equally comfortable shoes. The strategy is
								focussed on the international brand license business. The first
								casual and sportive shoe collections are launched forseeing the
								upcoming megatrends denim and sports fashion. In 2009 the first
								womans collection was launched.
							</p>
							<img src={milenium} alt="milenium"></img>
						</ScrollAnimation>
						<ScrollAnimation animateIn="fadeIn">
							<h2>2013 – Positioned for the future</h2>
							<p>
								Today the AstorMueller AG exclusively holds the license for
								bugatti shoes and DANIEL HECHTER shoes and stands for the
								exemplary symbiosis combining traditional craftsmenship, up to
								date fashion and state of the art technology for modern and
								perfect fitting shoes.
							</p>
							<p>
								German retailers have chossen bugatti shoes as the leading brand
								in the category „future perspectives“ and attributed highest
								appeal in the most important target groups.
							</p>
							<p>
								bugatti shoes are sold worldwide in 35 countries and became one
								of the most successful and leading shoe brands in Europe.
							</p>
							<img src={future} alt="future"></img>
						</ScrollAnimation>
					</div>
				</div>
			</Style>
		);
	}
}

const Style = styled.div`
	.main {
		background: #e8e8e8;
		border: solid black 0.05rem;
		padding: 1.5rem;
	}
	.main img {
		width: 70%;
	}
	.story img {
		width: 100% !important;
	}
`;
