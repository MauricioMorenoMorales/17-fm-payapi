import React, { useState } from 'react';
import Styles from './Contact.styles';
// Logos
import Tesla from '../../assets/shared/desktop/tesla.svg';
import Microsoft from '../../assets/shared/desktop/microsoft.svg';
import HP from '../../assets/shared/desktop/hewlett-packard.svg';
import Oracle from '../../assets/shared/desktop/oracle.svg';
import Google from '../../assets/shared/desktop/google.svg';
import Nvidia from '../../assets/shared/desktop/nvidia.svg';
import { EmailRegex } from '../../Helpers/EmailRegex';

const Contact = () => {
	const [validEmail, setValidEmail] = useState<boolean | null>(null);
	const [validName, setValidName] = useState<boolean | null>(null);
	const [validCompany, setValidCompany] = useState<boolean | null>(null);
	const [validTitle, setValidTitle] = useState<boolean | null>(null);
	const [validMessage, setValidMessage] = useState<boolean | null>(null);

	const handleSubmit = (event: React.SyntheticEvent) => {
		if (
			!validEmail ||
			!validName ||
			!validCompany ||
			!validTitle ||
			!validMessage
		) {
			event.preventDefault();
			alert('Please fill the form');
			return;
		} else {
			alert('Thanks for the Message :)');
		}
	};

	return (
		<Styles>
			<div className="outer-container">
				<h2 className="big">
					Submit a help request and we'll get in touch shortly
				</h2>
				<div className="inner-container">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Name"
							title="Name"
							className={`${validName === false && 'active'}`}
							onChange={event =>
								setValidName(event.target.value.trim().length >= 3)
							}
						/>
						<p className={`input-error ${validName === false && 'active'}`}>
							Name must contain at least 3 Characters
						</p>
						<input
							type="text"
							className={`${validEmail === false && 'active'}`}
							placeholder="Email Address"
							onChange={event =>
								setValidEmail(EmailRegex.test(event.target.value))
							}
						/>
						<p className={`input-error ${validEmail === false && 'active'}`}>
							Invalid Email
						</p>
						<input
							type="text"
							placeholder="Company Name"
							className={`${validCompany === false && 'active'}`}
							onChange={event =>
								setValidCompany(event.target.value.trim().length >= 3)
							}
						/>
						<p className={`input-error ${validCompany === false && 'active'}`}>
							Company Name must contain at least 3 letters
						</p>
						<input
							type="text"
							placeholder="Title"
							className={`${validTitle === false && 'active'}`}
							onChange={event =>
								setValidTitle(event.target.value.trim().length >= 3)
							}
						/>
						<p className={`input-error ${validTitle === false && 'active'}`}>
							Title must contain at least 3 characters
						</p>
						<textarea
							placeholder="Message"
							className={`${validMessage === false && 'active'}`}
							onChange={event =>
								setValidMessage(event.target.value.trim().length > 0)
							}
						/>
						<p className={`input-error ${validMessage === false && 'active'}`}>
							This field can't be empty
						</p>
						<button className="secondary-dark">Submit</button>
					</form>
					<article className="companies">
						<h4>Join the thousands of innovators already building with us</h4>
						<div className="companies__logos">
							<img src={Tesla} alt="Tesla" />
							<img src={Microsoft} alt="Microsoft" />
							<img src={HP} alt="Hewlett Packard" />
							<img src={Oracle} alt="Oracle" />
							<img src={Google} alt="Google" />
							<img src={Nvidia} alt="Nvidia" />
						</div>
					</article>
				</div>
			</div>
		</Styles>
	);
};

export default Contact;
