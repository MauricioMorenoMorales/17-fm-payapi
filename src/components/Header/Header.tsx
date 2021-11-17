import React, { useState } from 'react';
import Styles from './Header.styles';
import Logo from '../../assets/shared/desktop/logo.svg';
import './Hamburger.css';

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(true);
	return (
		<Styles>
			<header className="header">
				<section className="header__left">
					<img className="header__left__logo" src={Logo} alt="" />
					<a href="/" className="header__left__link">
						Pricing
					</a>
					<a href="/" className="header__left__link">
						About
					</a>
					<a href="/" className="header__left__link">
						Contact
					</a>
				</section>
				<section className="header__right">
					<button>Schedule a Demo</button>
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
						<a href="/" className="plegable-menu__content__link">
							Pricing
						</a>
						<a href="/" className="plegable-menu__content__link">
							About
						</a>
						<a href="/" className="plegable-menu__content__link">
							Contact
						</a>
						<button>Schedule a Demo</button>
					</div>
				)}
			</div>
		</Styles>
	);
};

export default Header;
