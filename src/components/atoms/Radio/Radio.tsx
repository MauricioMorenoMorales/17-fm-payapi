import React from 'react';
import Styles from './Radio.styles';
import Checked from '../../../assets/shared/desktop/icon-check-white.svg';

const Radio: React.FC<{
	activeState: boolean;
	setStateFunction: (state: boolean) => void;
}> = ({ activeState, setStateFunction }) => {
	return (
		<Styles>
			<div
				className={`radio ${activeState && 'active'}`}
				onClick={() => setStateFunction(!activeState)}
			>
				{activeState && <img src={Checked} alt="" />}
			</div>
		</Styles>
	);
};

export default Radio;
