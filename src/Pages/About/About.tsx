import React from 'react';
import Styles from './About.styles';
import MobileImage from '../../assets/about/mobile/image-team-members.jpg';
import TabletImage from '../../assets/about/tablet/image-team-members.jpg';
import DesktopImage from '../../assets/about/desktop/image-team-members.jpg';

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
			<picture>
				<source srcSet={DesktopImage} media="screen and (min-width: 900px)" />
				<source srcSet={TabletImage} media="screen and (min-width: 768px)" />
				<img src={MobileImage} alt="Team Members" />
			</picture>
			<article className="stats">
				<div className="stats__item">
					<p className="stats__item__title">Team Members</p>
					<p className="stats__item__number">300+</p>
				</div>
				<div className="stats__item">
					<p className="stats__item__title">Offices in theUS</p>
					<p className="stats__item__number">3</p>
				</div>
				<div className="stats__item">
					<p className="stats__item__title">Transactions analyzed</p>
					<p className="stats__item__number">10M+</p>
				</div>
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
		</Styles>
	);
};

export default About;
