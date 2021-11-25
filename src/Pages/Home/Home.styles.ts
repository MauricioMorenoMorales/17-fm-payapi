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
	.wework {
		padding: 50px 20px;
		background-color: ${colorSystem.mirageBlue};
		&__logos {
			display: grid;
			grid-template-columns: 50% 50%;
			width: 100%;
			max-width: 300px;
			height: 180px;
			gap: 20px;
			margin: 0 auto;
			align-items: center;
		}
		&__text {
			text-align: center;
			max-width: 320px;
			margin: 0 auto;
			& > h2 {
				color: ${colorSystem.linkWaterWhite};
				margin-top: 50px;
			}
			& > p {
				color: ${colorSystem.lightSanJuanBlue};
			}
			& > button {
				margin-bottom: 60px;
				margin-top: 30px;
			}
		}
	}
	.easy {
		&__figure {
			display: flex;
			justify-content: center;
			align-items: center;
			&__image {
				width: 100%;
				max-width: 320px;
			}
		}
		&__text {
			text-align: center;
			max-width: 320px;
			margin: 0 auto;
			& > p {
				color: ${colorSystem.lightSanJuanBlue};
			}
		}
	}
	.simple {
		margin-top: 100px;
		&__figure {
			display: flex;
			justify-content: center;
			&__image {
				width: 100%;
				max-width: 400px;
			}
		}
		&__text {
			text-align: center;
			max-width: 320px;
			margin: 0 auto;
			& > p {
				color: ${colorSystem.lightSanJuanBlue};
			}
		}
	}
	.features {
		width: 100%;
		max-width: 320px;
		margin: 0 auto;
		&__item {
			text-align: center;
			margin-top: 40px;
			&__figure {
				&__image {
					border: 1px solid ${colorSystem.green};
					border-radius: 50%;
					padding: 1px;
				}
			}
		}
	}
	@media screen and (min-width: 768px) {
		.hero {
			background-size: 150% 100%;
			background-position-y: -500px;
			&__figure {
				&__image {
					height: 320px;
				}
			}
			&__text {
				max-width: 550px;
			}
		}
		.wework {
			&__logos {
				grid-template-columns: 1fr 1fr 1fr;
				max-width: 600px;
				justify-items: center;
			}
			&__text {
				max-width: 600px;
			}
		}
		.easy {
			&__figure {
				&__image {
					max-width: 600px;
					margin-left: 70px;
				}
			}
			&__text {
				max-width: 520px;
				margin-top: -100px;
			}
		}
		.simple {
			&__figure {
				&__image {
					max-width: 600px;
					margin-left: 70px;
				}
			}
			&__text {
				max-width: 520px;
				margin-top: -100px;
			}
		}
		.features {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			max-width: 1200px;
			&__item {
				padding: 0 15px;
			}
		}
	}
	@media screen and (min-width: 1100px) {
		background-image: url(${circlePattern});
		background-repeat: no-repeat;
		background-position-y: -300px;
		background-position-x: 55vw;
		.hero {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			background-image: none;
			max-width: 1200px;
			margin: 0 auto;
			&__figure {
				&__image {
					height: 650px;
				}
			}
			&__text {
				text-align: start;
				padding-top: 80px;
				margin: 0;
				justify-self: flex-start;
				& > p {
					margin-left: 30px;
				}
			}
		}
		.wework {
			&--wrapper {
				display: flex;
				flex-direction: row-reverse;
				align-items: center;
				text-align: start;
				max-width: 1200px;
				margin: 0 auto;
			}
			&__text {
				text-align: start;
				padding-right: 100px;
			}
		}
		.easy {
			display: flex;
			padding-right: 25px;
			max-width: 1200px;
			margin: 0 auto;
			&__figure {
				margin-left: -40px;
				&__image {
					margin: 0;
					max-width: 900px;
				}
			}
			&__text {
				margin: 0;
				margin-top: 70px;
				text-align: start;
			}
		}
		.simple {
			display: flex;
			flex-direction: row-reverse;
			max-width: 1200px;
			margin: 0 auto;
			&__figure {
				&__image {
					margin: 0;
					max-width: 900px;
				}
			}
			&__text {
				margin: 0;
				padding-left: 20px;
				margin-top: 100px;
				text-align: start;
			}
		}
	}
`;

export default Styles;
