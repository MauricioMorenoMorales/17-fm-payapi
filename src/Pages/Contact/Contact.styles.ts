import styled from 'styled-components';

const Styles = styled.div`
	padding-top: 130px;
	& > h2 {
		text-align: center;
		max-width: 390px;
		margin: 0 auto;
		padding: 20px;
	}
	.container {
		width: 100%;
		padding: 25px;
	}
	& form {
		width: 100%;
		max-width: 370px;
		margin: 0 auto;
		& > button {
			margin-top: 20px;
		}
	}
	.companies {
		text-align: center;
		max-width: 370px;
		margin: 0 auto;
		margin-top: 100px;
		&__logos {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;
			justify-items: center;
			align-items: center;
			& > img {
				margin-bottom: 20px;
			}
		}
	}
	@media screen and (min-width: 768px) {
		h2 {
			max-width: 490px;
		}
		& form {
			max-width: 460px;
		}
	}
	.companies {
		max-width: 560px;
		&__logos {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
	@media screen and (min-width: 1100px) {
		max-width: 1100px;
		margin: 0 auto;
		h2 {
			text-align: start;
			max-width: 900px;
			margin-left: 0;
		}
		.container {
			display: grid;
			grid-template-columns: 460px auto;
			gap: 50px;
			max-width: 1100px;
			margin: 0 auto;
			align-items: center;
		}
		.companies {
			text-align: start;
			margin-top: -50px;
			& > h4 {
				margin-left: 15px;
			}
		}
	}
`;

export default Styles;
