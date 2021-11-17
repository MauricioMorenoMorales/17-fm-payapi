import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	position: relative;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 20px;
		&__left {
			&__link {
				display: none;
			}
		}
		&__right {
			display: none;
		}
	}
	.plegable-menu {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		&.active {
			background-color: ${colorSystem.mirageBlue};
			height: 100vh;
			width: 300px;
		}
		& > button {
			margin-top: 20px;
			margin-right: 10px;
		}
		&__content {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 90%;
			margin: 20px auto;
			border-top: thin solid ${colorSystem.sanJuanBlue};
			padding-top: 20px;
			&__link {
				font-size: 2.5rem;
				line-height: 5rem;
			}
			& > button {
				margin-top: 20px;
				width: 100%;
			}
		}
	}
	@media screen and (min-width: 768px) {
		.header {
			max-width: 1200px;
			margin: 0 auto;
			&__left {
				display: flex;
				align-items: center;
				justify-content: center;
				&__link {
					display: block;
					margin-left: 20px;
					color: ${colorSystem.sanJuanBlue};
				}
				&__logo {
					margin-right: 20px;
				}
			}
			&__right {
				display: block;
			}
		}
		.plegable-menu {
			display: none;
		}
	}
`;

export default Styles;
