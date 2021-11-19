import styled from 'styled-components';
import circlePattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	.hero {
		padding: 20px;
		background-image: url(${circlePattern});
		background-position-y: -600px;
		background-position-x: center;
		padding-top: 100px;
		background-repeat: no-repeat;
		&__figure {
			display: flex;
			justify-content: center;
			&__image {
				height: 250px;
			}
		}
		&__text {
			max-width: 330px;
			margin: 0 auto;
			text-align: center;
			& > p {
				color: ${colorSystem.lightSanJuanBlue};
				margin-top: 0;
			}
		}
	}
`;

export default Styles;
