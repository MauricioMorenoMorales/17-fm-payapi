import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/shared/desktop/logo-light.svg';
import { Icons } from '../atoms';
import Styles from './Footer.styles';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();
	return (
		<Styles>
			<footer className="footer">
				<div className="footer__left">
					<img
						className="footer__left__logo"
						src={Logo}
						alt="Company Logo"
						onClick={() => navigate('/')}
					/>
					<Link to="/pricing" className="footer__left__link">
						Pricing
					</Link>
					<Link to="/about" className="footer__left__link">
						About
					</Link>
					<Link to="/contact" className="footer__left__link">
						Contact
					</Link>
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
