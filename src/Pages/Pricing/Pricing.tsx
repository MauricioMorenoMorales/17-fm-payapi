import React from 'react';
import Styles from './Pricing.styles';

const Pricing = () => {
	return (
		<Styles>
			<h2 className="big">Pricing</h2>
			<div className="container">
				<article className="plan">
					<h4 className="plant__titleo accent">Free Plan</h4>
					<p className="plan__paragraph desaturated-dark">
						Build and test using our core set of products with up to 100 API
						requests{' '}
					</p>
					<h2 className="price">$0.00</h2>
					<section className="plan__points">
						<p className="plan__points__item active">Transactions</p>
						<p className="plan__points__item active">Auth</p>
						<p className="plan__points__item active">Identity</p>
						<p className="plan__points__item">Investments</p>
						<p className="plan__points__item">Assets</p>
						<p className="plan__points__item">Liabilities</p>
						<p className="plan__points__item">Income</p>
					</section>
					<button className="plan__button secondary-dark">
						Request Access
					</button>
				</article>
				<article className="plan">
					<h4 className="plant__title accent">Basic Plan</h4>
					<p className="plan__paragraph desaturated-dark">
						Launch your project with unlimited requests and no contractual
						minimums
					</p>
					<h2 className="price">$249.00</h2>
					<section className="plan__points">
						<p className="plan__points__item active">Transactions</p>
						<p className="plan__points__item active">Auth</p>
						<p className="plan__points__item active">Identity</p>
						<p className="plan__points__item active">Investments</p>
						<p className="plan__points__item active">Assets</p>
						<p className="plan__points__item">Liabilities</p>
						<p className="plan__points__item">Income</p>
					</section>
					<button className="plan__button secondary-dark">
						Request Access
					</button>
				</article>
				<article className="plan">
					<h4 className="plant__title accent">Premium Plan</h4>
					<p className="plan__paragraph desaturated-dark">
						Get tailored solutions, volume pricing, and dedicated support for
						your team
					</p>
					<h2 className="plan__price ">$499.00</h2>
					<section className="plan__points">
						<p className="plan__points__item active">Transactions</p>
						<p className="plan__points__item active">Auth</p>
						<p className="plan__points__item active">Identity</p>
						<p className="plan__points__item active">Investments</p>
						<p className="plan__points__item active">Assets</p>
						<p className="plan__points__item active">Liabilities</p>
						<p className="plan__points__item active">Income</p>
					</section>
					<button className="plan__button secondary-dark">
						Request Access
					</button>
				</article>
			</div>
		</Styles>
	);
};

export default Pricing;
