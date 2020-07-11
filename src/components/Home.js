import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from './Slider';
import SliderMan from './SliderMan';
import SliderWoman from './SliderWoman';
import play from '../img/play.png';
import ScrollAnimation from 'react-animate-on-scroll';
import logo from '../img/bug.png';
import pic2 from '../img/slider/home-pic1.png';
export default class Home extends React.Component {
	render() {
		const divStyle = {
			fontFamily: 'Cormorant Garamond',
		};
		return (
			<Main>
				<div className=" main mt-2  text-center ">
					<Link to="/">
						{' '}
						<img src={logo} alt="logo"></img>
					</Link>
				</div>
				<div
					className="  mt-2 mx-auto "
					style={{ width: '99.6%', color: 'red' }}
				>
					<Slider></Slider>
				</div>
				<div className="mt-4">
					<div className="row">
						<div class="sliderman col-xl ml-1">
							<SliderMan className="" />
						</div>
						<div class="sliderwoman col-xl mr-1">
							<SliderWoman />
						</div>
					</div>
				</div>
				<div className="middle">
					<div class="row">
						<div class="container">
							<ScrollAnimation
								animateIn="bounceInRight"
								animateOut="bounceOutLeft"
							>
								<h1 className="discover" style={divStyle}>
									Discover our new Spring Summer 20 Collection!
								</h1>
							</ScrollAnimation>

							<div className="play">
								<a
									href="https://www.youtube.com/watch?v=ggxEplyQNog"
									target="_blank"
								>
									<img src={play} alt="play"></img>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="backpic img-fluid mt-4 mx-auto text-center">
					<img src={pic2} alt="picture2"></img>
				</div>
			</Main>
		);
	}
}

const Main = styled.div`
 .play img{
	 width:10%;
	 padding-top:1rem;
 }
 .play img:hover{
	transition: all 1s linear;
	opacity:.5;

 }
.middle{
	background:black;
	width:100%;
	height:15rem;
	text-align:center;
	margin-top:2rem;
	color:white;
}
 
 
.backpic img{
	width:100%;
}
.sliderman{
	position: relative;
		overflow: hidden;
}
.sliderman:hover {
	transition: all 1s linear;
	transform: scale(1.05)  
 
}
.sliderwoman:hover{
	transition: all 1s ease-in;
	transform: scale(1.05);
 
}
.carousel-inner{color:red;!important}
.main img{
	width:13%; !important
 
}
.discover{
	padding-top:1rem;
}
 
 
`;
