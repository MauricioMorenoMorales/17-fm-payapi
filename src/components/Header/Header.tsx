import React, { useEffect, useState } from 'react';
import Styles from './Header.styles';
import Logo from '../../assets/shared/desktop/logo.svg';
import './Hamburger.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const navigate = useNavigate();

	const closeMenuWhenScrolls = () =>
		window.scrollY > 250 && setMenuOpened(false);

	useEffect(() => {
		document.addEventListener('scroll', closeMenuWhenScrolls);
		return () => {
			document.addEventListener('scroll', closeMenuWhenScrolls);
		};
	}, []);
	return (
		<Styles>
			<header className="header">
				<section className="header__left">
					<img
						onClick={() => {
							setMenuOpened(false);
							navigate('/');
						}}
						className="header__left__logo"
						src={Logo}
						alt=""
					/>
					<Link to="/pricing" className="header__left__link">
						Pricing
					</Link>
					<Link to="/about" className="header__left__link">
						About
					</Link>
					<Link to="/contact" className="header__left__link">
						Contact
					</Link>
				</section>
				<section className="header__right">
					<button onClick={() => navigate('/contact')}>Schedule a Demo</button>
				</section>
			</header>
			<div className={`plegable-menu ${menuOpened && 'active'}`}>
				<button
					onClick={() => setMenuOpened(prevState => !prevState)}
					className={`hamburger hamburger--collapse ${
						menuOpened && 'is-active'
					}`}
					type="button"
					title="Open Menu"
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
				{menuOpened && (
					<div className="plegable-menu__content">
						<Link
							to="/pricing"
							className="plegable-menu__content__link"
							onClick={() => setMenuOpened(false)}
						>
							Pricing
						</Link>
						<Link
							to="/about"
							className="plegable-menu__content__link"
							onClick={() => setMenuOpened(false)}
						>
							About
						</Link>
						<Link
							to="/contact"
							className="plegable-menu__content__link"
							onClick={() => setMenuOpened(false)}
						>
							Contact
						</Link>
						<button
							onClick={() => {
								navigate('/contact');
								setMenuOpened(false);
							}}
						>
							Schedule a Demo
						</button>
					</div>
				)}
			</div>
		</Styles>
	);
};

export default Header;
