import styled from 'styled-components';
import circlePattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { colorSystem, fontSystem } from '../../global/designSystem';

const Styles = styled.div`
	padding-top: 100px;
	background-image: url(${circlePattern});
	background-position-y: -600px;
	background-position-x: 30vw;
	background-repeat: no-repeat;
	& > h2 {
		max-width: 400px;
		margin: 0 auto;
		text-align: center;
		margin: 100px auto;
	}
	& > picture {
		display: flex;
		justify-content: center;
		& > img {
			width: 100%;
			max-width: 1920px;
			margin: 50px 0;
		}
	}
	.mission {
		max-width: 400px;
		margin: 0 auto;
		text-align: center;
		& > p {
			color: ${colorSystem.lightSanJuanBlue};
		}
	}
	.stats {
		border-top: 1px solid ${colorSystem.lightSanJuanBlue};
		border-bottom: 1px solid ${colorSystem.lightSanJuanBlue};
		max-width: 400px;
		margin: 0 auto;
		margin-bottom: 50px;
		&__item {
			text-align: center;
			padding-top: 20px;
			padding-bottom: 20px;
			&__title {
				color: ${colorSystem.lightSanJuanBlue};
			}
			&__number {
				color: ${colorSystem.darkPink};
				font-weight: 700;
				font-family: ${fontSystem.accent};
				font-size: 5.6rem;
				line-height: 7.2rem;
				margin: 0;
			}
		}
	}
	@media screen and (min-width: 768px) {
		& > h2 {
			text-align: start;
			max-width: 700px;
		}
		.mission {
			max-width: 700px;
			display: grid;
			grid-template-columns: 250px 1fr;
			text-align: start;
			& > h4 {
				margin-top: 15px;
			}
		}
		.stats {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			max-width: 700px;
			&__item {
				text-align: start;
				padding: 0 20px;
			}
		}
	}
	@media screen and (min-width: 1000px) {
		& > h2 {
			max-width: 920px;
			text-align: start;
		}
		.mission {
			max-width: 920px;
		}
		.stats {
			max-width: 920px;
		}
	}
`;

export default Styles;
