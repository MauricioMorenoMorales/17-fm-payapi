import styled from 'styled-components';
import circlePattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	background-color: ${colorSystem.mirageBlue};
	background-image: url(${circlePattern});
	background-size: 800px 800px;
	background-repeat: no-repeat;
	background-position-x: center;
	background-position-y: 120px;
	.footer {
		padding-bottom: 60px;
		&__left {
			display: flex;
			flex-direction: column;
			align-items: center;
			& > * {
				margin-top: 20px;
			}
			&__logo {
				width: 120px;
				cursor: pointer;
			}
		}
		&__right {
			display: flex;
			justify-content: center;
			margin-top: 20px;
			& > * {
				margin: 0 8px;
			}
		}
	}
	@media screen and (min-width: 768px) {
		background-position-x: 50vw;
		background-position-y: 0;
		.footer {
			display: flex;
			justify-content: space-between;
			padding: 35px 20px;
			max-width: 1200px;
			margin: 0 auto;
			&__left {
				flex-direction: row;
				align-items: center;
				justify-content: center;
				& > * {
					margin-top: 0;
					margin-right: 20px;
				}
			}
			&__right {
				margin: 0;
				align-items: center;
			}
		}
	}
`;

export default Styles;
