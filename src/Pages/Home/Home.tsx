import React from 'react';
import { EmailInput } from '../../components';
import HeroImage from '../../assets/home/desktop/illustration-phone-mockup.svg';
import Tesla from '../../assets/shared/desktop/tesla-light.svg';
import Microsoft from '../../assets/shared/desktop/microsoft-light.svg';
import HP from '../../assets/shared/desktop/hewlett-packard-light.svg';
import Oracle from '../../assets/shared/desktop/oracle-light.svg';
import Google from '../../assets/shared/desktop/google-light.svg';
import Nvidia from '../../assets/shared/desktop/nvidia-light.svg';
import Styles from './Home.styles';

const Home = () => {
	return (
		<Styles>
			<article className="hero">
				<figure className="hero__figure">
					<img
						className="hero__figure__image"
						src={HeroImage}
						alt="Phone Illustration"
					/>
				</figure>
				<div className="hero__text">
					<h1>Start building with our APIs for absolutely free.</h1>
					<EmailInput />
					<p>
						Have any questions? <b>Contact US</b>
					</p>
				</div>
			</article>
			<article className="wework">
				<div className="wework--wrapper">
					<section className="wework__logos">
						<img src={Tesla} alt="Tesla" />
						<img src={Microsoft} alt="Microsoft" />
						<img src={HP} alt="Hewlett Packard" />
						<img src={Oracle} alt="Oracle" />
						<img src={Google} alt="Google" />
						<img src={Nvidia} alt="Nvidia" />
					</section>
					<section className="wework__text">
						<h2>Who we work with</h2>
						<p>
							Today, millions of people around the world have successfully
							connected their accounts to apps they love using our API. We
							provide developers with the tools they need to create easy and
							accessible experiences for their users.
						</p>
						<button className="secondary-light">About Us</button>
					</section>
				</div>
			</article>
		</Styles>
	);
};

export default Home;
