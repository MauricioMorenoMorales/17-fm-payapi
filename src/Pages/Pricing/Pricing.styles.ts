import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';
import Check from '../../assets/shared/desktop/icon-check.svg';
import circlePattern from '../../assets/shared/desktop/bg-pattern-circle.svg';

const Styles = styled.div`
	padding-top: 100px;
	background-image: url(${circlePattern});
	background-position-y: -600px;
	background-position-x: 30vw;
	background-repeat: no-repeat;
	& > h2 {
		text-align: center;
	}
	.plan {
		max-width: 250px;
		margin: 0 auto;
		text-align: center;
		&__title {
			color: ${colorSystem.darkPink};
		}
		&__paragraph {
			max-width: 250px;
			text-align: center;
			margin: 0 auto;
		}
		&__points {
			text-align: start;
			margin-bottom: 50px;
			border-top: 1px solid ${colorSystem.lightSanJuanBlue};
			border-bottom: 1px solid ${colorSystem.lightSanJuanBlue};
			padding: 20px 0;
			&__item {
				max-width: 100px;
				margin: 10px auto;
				padding-left: 40px;
				color: ${colorSystem.lightSanJuanBlue};
				&.active {
					background-image: url(${Check});
					background-repeat: no-repeat;
					background-position-y: center;
					color: ${colorSystem.sanJuanBlue};
				}
			}
		}
	}
	@media screen and (min-width: 768px) {
		background-position-x: 50vw;
		.container {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 20px;
			max-width: 700px;
			margin: 0 auto;
		}
	}
	@media screen and (min-width: 1100px) {
		background-position-x: 65vw;
		.container {
			max-width: 1000px;
		}
		.plan {
			text-align: start;
			width: 100%;
			max-width: 300px;
			&__paragraph {
				max-width: 100%;
				text-align: start;
			}
			&__points {
				width: 100%;
				&__item {
					margin: 10px 0;
				}
			}
		}
	}
`;

export default Styles;
