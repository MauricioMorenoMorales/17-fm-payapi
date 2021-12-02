import React, { useState } from 'react';
import Styles from './Contact.styles';
// Logos
import Tesla from '../../assets/shared/desktop/tesla.svg';
import Microsoft from '../../assets/shared/desktop/microsoft.svg';
import HP from '../../assets/shared/desktop/hewlett-packard.svg';
import Oracle from '../../assets/shared/desktop/oracle.svg';
import Google from '../../assets/shared/desktop/google.svg';
import Nvidia from '../../assets/shared/desktop/nvidia.svg';

const Contact = () => {
	const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
	const [invalidName, setInvalidName] = useState<boolean>(false);
	const [invalidCompany, setInvalidCompany] = useState<boolean>(false);
	const [invalidTitle, setInvalidTitle] = useState<boolean>(false);
	const [invalidMessage, setInvalidMessage] = useState<boolean>(false);

	const handleSubmit = (event: React.SyntheticEvent) => {
		if (
			invalidEmail ||
			invalidName ||
			invalidCompany ||
			invalidTitle ||
			invalidMessage
		) {
			event.preventDefault();
			return;
		} else {
			alert('Thanks for the Message :)');
		}
	};

	return (
		<Styles>
			<h2 className="big">
				Submit a help request and we'll get in touch shortly
			</h2>
			<div className="container">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Name"
						title="Name"
						className={`${invalidName && 'active'}`}
						onChange={event =>
							setInvalidName(!(event.target.value.trim().length >= 3))
						}
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
							setInvalidCompany(!(event.target.value.trim().length >= 3))
						}
					/>
					<p className={`input-error ${invalidCompany && 'active'}`}>
						Company Name should contain at least 3 letters
					</p>
					<input
						type="text"
						placeholder="Title"
						className={`${invalidTitle && 'active'}`}
						onChange={event =>
							setInvalidTitle(!(event.target.value.trim().length >= 3))
						}
					/>
					<p className={`input-error ${invalidTitle && 'active'}`}>
						Title must contain at least 3 characters
					</p>
					<textarea
						placeholder="Message"
						className={`${invalidMessage && 'active'}`}
						onChange={event =>
							setInvalidMessage(!(event.target.value.trim().length > 0))
						}
					/>
					<p className={`input-error ${invalidMessage && 'active'}`}>
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
		</Styles>
	);
};

export default Contact;
