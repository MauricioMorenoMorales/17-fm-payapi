import React from 'react';
import { Icons } from '../../components/atoms';
import Styles from './Home.styles';

const Home = () => {
	return (
		<Styles>
			<h1>This is a home :3</h1>
			<Icons type="facebook" />
			<Icons type="facebook" />
			<Icons type="facebook" />
		</Styles>
	);
};

export default Home;
