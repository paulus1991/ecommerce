import React from 'react';
import pic6 from '../img/slider/13.png';
import pic7 from '../img/slider/14.png';
import pic8 from '../img/slider/17.png';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
	{
		src: pic8,

		header: 'Bugatti  woman Collection',
		key: '8',
	},
	{
		src: pic6,

		header: 'Bugatti  woman Collection',
		key: '6',
	},
	{
		src: pic7,

		header: 'Bugatti  woman Collection',
		key: '7',
	},
];

const SliderWoman = () => <UncontrolledCarousel items={items} />;

export default SliderWoman;
