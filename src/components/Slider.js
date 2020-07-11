import React from 'react';
import styled from 'styled-components';
import pic1 from '../img/slider/8.png';
import pic2 from '../img/slider/9.png';
import pic3 from '../img/slider/10.png';
import pic4 from '../img/slider/11.png';
import pic5 from '../img/slider/12.png';
import pic6 from '../img/slider/13.png';
import pic7 from '../img/slider/14.png';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
	{
		src: pic7,

		header: 'Bugatti man & woman',
		key: '7',
	},
	{
		src: pic1,

		header: 'Bugatti man & woman',
		key: '1',
	},
	{
		src: pic2,

		header: 'Bugatti man & woman',
		key: '2',
	},
	{
		src: pic3,

		header: 'Bugatti man & woman',
		key: '3',
	},
	{
		src: pic4,

		header: 'Bugatti man & woman',

		key: '4',
	},
	{
		src: pic5,

		header: 'Bugatti man & woman',
		key: '5',
	},
	{
		src: pic6,

		header: 'Bugatti man & woman',
		key: '6',
	},
];

const Slider = () => (
	<Stylus style={{ color: 'red' }}>
		<UncontrolledCarousel style={{ color: 'dark' }} items={items} />
	</Stylus>
);

export default Slider;

const Stylus = styled.div`
 
items{color:red; !important}
`;
