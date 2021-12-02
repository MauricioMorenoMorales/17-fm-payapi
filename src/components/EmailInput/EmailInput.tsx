import React, { useState } from 'react';
import { EmailRegex } from '../../Helpers/EmailRegex';
import Styles from './EmailInput.styles';

const EmailInput = () => {
	const [error, setError] = useState<boolean>(false);
	return (
		<Styles>
			<input
				type="text"
				title="email"
				placeholder="Introduce your Email"
				className={`${error && 'error'}`}
				onChange={event => setError(!EmailRegex.test(event?.target.value))}
			/>
			<button>Schedule a Demo</button>
		</Styles>
	);
};

export default EmailInput;
