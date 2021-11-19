import React from 'react';
import Logo from '../../assets/shared/desktop/logo-light.svg';
import { Icons } from '../atoms';
import Styles from './Footer.styles';

const Footer = () => {
	return (
		<Styles>
			<footer className="footer">
				<div className="footer__left">
					<img className="footer__left__logo" src={Logo} alt="" />
					<a href="/" className="footer__left__link">
						Pricing
					</a>
					<a href="/" className="footer__left__link">
						About
					</a>
					<a href="/" className="footer__left__link">
						Contact
					</a>
				</div>
				<div className="footer__right">
					<Icons type="facebook" />
					<Icons type="twitter" />
					<Icons type="linkedin" />
				</div>
			</footer>
		</Styles>
	);
};

export default Footer;
