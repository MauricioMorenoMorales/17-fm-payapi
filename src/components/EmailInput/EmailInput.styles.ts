import styled from 'styled-components';
import {
	colorSystem,
	fontSystem,
	shadowSystem,
} from '../../global/designSystem';

const Styles = styled.div`
	display: flex;
	flex-direction: column;
	& > * {
		margin-bottom: 20px;
	}
	& > input {
		height: 46px;
		border-radius: 24px;
		box-shadow: ${shadowSystem.normal};
		font-weight: 700;
		color: ${colorSystem.sanJuanBlue};
		font-size: 1.5rem;
		font-family: ${fontSystem.normal};
		border: none;
		padding-left: 30px;
		outline: none;
		&.error {
			border: 1px solid red;
		}
	}
	@media screen and (min-width: 768px) {
		flex-direction: row;
		& > input {
			width: 80%;
		}
		& > button {
			margin-left: -50px;
			min-width: 200px;
			margin-top: 4px;
		}
	}
`;

export default Styles;
