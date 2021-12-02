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
