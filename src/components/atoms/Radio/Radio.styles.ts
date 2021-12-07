import styled from 'styled-components';
import { colorSystem } from '../../../global/designSystem';

const Styles = styled.div`
	display: inline;
	& > .radio {
		border-radius: 3px;
		background-color: #c0cbd5;
		height: 24px;
		width: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		&.active {
			background-color: ${colorSystem.darkPink};
		}
	}
`;

export default Styles;
