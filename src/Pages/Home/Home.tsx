import React from 'react';
import { EmailInput } from '../../components';
import HeroImage from '../../assets/home/desktop/illustration-phone-mockup.svg';
import Styles from './Home.styles';

const Home = () => {
	return (
		<Styles>
			<section className="hero">
				<figure className="hero__figure">
					<img className="hero__figure__image" src={HeroImage} alt="" />
				</figure>
				<div className="hero__text">
					<h1>Start building with our APIs for absolutely free.</h1>
					<EmailInput />
					<p>
						Have any questions? <b>Contact US</b>
					</p>
				</div>
			</section>
		</Styles>
	);
};

export default Home;
