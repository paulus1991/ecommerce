import React from 'react';

import pic1 from '../img/slider/16.png';
import pic2 from '../img/slider/15.png';
import pic3 from '../img/slider/10.png';
import pic4 from '../img/slider/11.png';
import pic5 from '../img/slider/12.png';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
	{
		src: pic1,

		header: 'Bugatti man Collection ',
		key: '1',
	},
	{
		src: pic2,

		header: 'Bugatti man Collection ',
		key: '2',
	},
	{
		src: pic3,

		header: 'Bugatti man Collection ',
		key: '3',
	},
	{
		src: pic4,

		header: 'Bugatti man Collection ',

		key: '4',
	},
	{
		src: pic5,

		header: 'Bugatti man Collection',
		key: '5',
	},
];

const SliderMan = () => (
	<UncontrolledCarousel style={{ color: 'dark' }} items={items} />
);

export default SliderMan;
