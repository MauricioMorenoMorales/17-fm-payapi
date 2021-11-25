import React from 'react';
import Styles from './About.styles';

const About = () => {
	return (
		<Styles>
			<h2 className="big">
				We empower innovators by delivering access to the financial system
			</h2>
			<article className="mission">
				<h4>Our Vision</h4>
				<p>
					Our main goal is to build beautiful consumer experiences along with
					developer-friendly infrastructure. The result is an intelligent tool
					that gives everyone the ability to create amazing products that solve
					big problems. We are deeply focused on democratizing financial
					services through technology.{' '}
				</p>
			</article>
			<article className="mission">
				<h4>Our Business</h4>
				<p>
					At the core of our platform is the technical infrastructure APIs that
					connect consumers. Our innovative product provides key insights for
					businesses and individuals, as well as robust reporting for
					traditional financial institutions and developers.{' '}
				</p>
			</article>
			<article className="mission">
				<h4>Our Business</h4>
				<p>
					We strongly believe there's always an opportunity to learn from each
					other outside of day-to-day work, whether it's company-wide offsites,
					internal hackathons, or co-worker meetups. We always value cross-team
					collaboration and diversity of thought, no matter the job title.
				</p>
			</article>
			<article className="mission">
				<h4>The People</h4>
				<p>
					We're all passionate about building a more efficient and inclusive
					financial infrastructure together. At PayAPI, we have diverse
					backgrounds and skills.
				</p>
			</article>
			<h2>About</h2>
			<h2>About</h2>
		</Styles>
	);
};

export default About;
