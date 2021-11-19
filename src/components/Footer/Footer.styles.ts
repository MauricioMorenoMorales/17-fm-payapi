import styled from 'styled-components';
import { colorSystem } from '../../global/designSystem';

const Styles = styled.div`
	background-color: ${colorSystem.mirageBlue};
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
`;

export default Styles;
