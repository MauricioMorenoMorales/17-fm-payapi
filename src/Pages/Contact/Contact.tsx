import React, { useState } from 'react';
import Styles from './Contact.styles';

const Contact = () => {
	const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
	const [invalidName, setInvalidName] = useState<boolean>(false);
	const [invalidCompany, setInvalidCompany] = useState<boolean>(false);
	const [invalidTitle, setInvalidTitle] = useState<boolean>(false);
	const [invalidMessage, setInvalidMessage] = useState<boolean>(false);

	return (
		<Styles>
			<h2 className="big">
				Submit a help request and we'll get in touch shortly
			</h2>
			<form>
				<input
					type="text"
					placeholder="Name"
					title="Name"
					className={`${invalidName && 'active'}`}
					onChange={event => setInvalidName(!(event.target.value.length >= 3))}
				/>
				<p className={`input-error ${invalidName && 'active'}`}>
					Name should be at least 3 Characters
				</p>
				<input
					type="text"
					className={`${invalidEmail && 'active'}`}
					placeholder="Email Address"
					onChange={event =>
						setInvalidEmail(
							!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
								event.target.value,
							),
						)
					}
				/>
				<p className={`input-error ${invalidEmail && 'active'}`}>
					Invalid Email
				</p>
				<input
					type="text"
					placeholder="Company Name"
					className={`${invalidCompany && 'active'}`}
					onChange={event =>
						setInvalidCompany(!(event.target.value.length >= 3))
					}
				/>
				<p className={`input-error ${invalidCompany && 'active'}`}>
					Company Name should contain at least 3 letters
				</p>
				<input
					type="text"
					placeholder="Title"
					className={`${invalidTitle && 'active'}`}
					onChange={event => setInvalidTitle(!(event.target.value.length >= 3))}
				/>
				<p className={`input-error ${invalidTitle && 'active'}`}>
					Title must contain at least 3 characters
				</p>
				<textarea
					placeholder="Message"
					className={`${invalidMessage && 'active'}`}
					onChange={event =>
						setInvalidMessage(!(event.target.value.length > 0))
					}
				/>
				<p className={`input-error ${invalidMessage && 'active'}`}>
					This field can't be empty
				</p>
			</form>
		</Styles>
	);
};

export default Contact;
