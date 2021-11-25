import styled from 'styled-components';

const Styles = styled.div`
	padding: 0 20px;
	& > h2 {
		text-align: center;
	}
	@media screen and (min-width: 768px) {
		max-width: 550px;
		margin: 0 auto;
	}
	@media screen and (min-width: 900px) {
		display: grid;
		grid-template-columns: 1fr 500px;
		max-width: 1200px;
		align-items: center;
		& > h2 {
			text-align: start;
			margin-top: 12px;
		}
	}
`;

export default Styles;
