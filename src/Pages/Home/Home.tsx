import React from 'react';
import { EmailInput } from '../../components';
// Illustration
import HeroImage from '../../assets/home/desktop/illustration-phone-mockup.svg';
import EasyImage from '../../assets/home/desktop/illustration-easy-to-implement.svg';
import SimpleImage from '../../assets/home/desktop/illustration-simple-ui.svg';
// Logos
import Tesla from '../../assets/shared/desktop/tesla-light.svg';
import Microsoft from '../../assets/shared/desktop/microsoft-light.svg';
import HP from '../../assets/shared/desktop/hewlett-packard-light.svg';
import Oracle from '../../assets/shared/desktop/oracle-light.svg';
import Google from '../../assets/shared/desktop/google-light.svg';
import Nvidia from '../../assets/shared/desktop/nvidia-light.svg';
import Styles from './Home.styles';
// Features
import PersonalFinances from '../../assets/home/desktop/icon-personal-finances.svg';
import Banking from '../../assets/home/desktop/icon-banking-and-coverage.svg';
import ConsumerPayments from '../../assets/home/desktop/icon-consumer-payments.svg';

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
			<article className="easy">
				<figure className="easy__figure">
					<img
						src={EasyImage}
						alt="Implementation Illustration"
						title="Easy to Implement"
						className="easy__figure__image"
					/>
				</figure>
				<section className="easy__text">
					<h2>Easy to implement</h2>
					<p className="desaturated-dark">
						Our API comes with just a few lines of code. You???ll be up and
						running in no time. We built our documentation page to integrate
						payments functionality with ease.
					</p>/
				</section>
			</article>
			<div className="simple--background">
				<article className="simple">
					<figure className="simple__figure">
						<img src={SimpleImage} alt="" className="simple__figure__image" />
					</figure>
					<section className="simple__text">
						<h2>Simple UI & UX</h2>
						<p>
							Our pre-built form is easy to integrate in your app or website???s
							checkout flow and designed to optimize conversion.
						</p>
					</section>
				</article>
			</div>

			<article className="features">
				<div className="features__item">
					<figure className="features__item__figure">
						<img
							src={PersonalFinances}
							alt=""
							className="features__item__figure__image"
						/>
					</figure>
					<section className="features__item__text">
						<h3>Personal Finances</h3>
						<p>
							Consolidate financial data from multiple sources and categorize
							transactions up to 2 years of history. Analyze reports to
							reconcile activities in your account.
						</p>
					</section>
				</div>
				<div className="features__item">
					<figure className="features__item__figure">
						<img
							src={Banking}
							alt=""
							className="features__item__figure__image"
						/>
					</figure>
					<section className="features__item__text">
						<h3>Banking & Coverage</h3>
						<p>
							With our platform, you can speed up account onboarding and support
							ongoing payments for checking, savings, credit card, and brokerage
							accounts.
						</p>
					</section>
				</div>
				<div className="features__item">
					<figure className="features__item__figure">
						<img
							src={ConsumerPayments}
							alt=""
							className="features__item__figure__image"
						/>
					</figure>
					<section className="features__item__text">
						<h3>Consumer Payments</h3>
						<p>
							It???s easier to set up secure bank payments with us through a flow
							designed with the user experience in mind. Customers could
							instantly authenticate their account.
						</p>
					</section>
				</div>
			</article>
		</Styles>
	);
};

export default Home;
