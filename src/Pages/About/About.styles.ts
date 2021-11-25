import styled from 'styled-components';
import circlePattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { colorSystem } from '../../global/designSystem';

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
	& > picture > img {
		width: 100%;
		margin: 100px 0;
		max-width: 1920px;
		margin: 0 auto;
	}
	.mission {
		max-width: 400px;
		margin: 0 auto;
		text-align: center;
		& > p {
			color: ${colorSystem.lightSanJuanBlue};
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
	}
	@media screen and (min-width: 1000px) {
		& > h2 {
			max-width: 920px;
			text-align: start;
		}
		.mission {
			max-width: 920px;
		}
	}
`;

export default Styles;
