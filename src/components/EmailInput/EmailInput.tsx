import React from 'react';
import Styles from './EmailInput.styles';

const EmailInput = () => {
	return (
		<Styles>
			<input type="text" title="email" placeholder="Introduce your Email"/>
			<button>Schedule a Demo</button>
		</Styles>
	);
};

export default EmailInput;
