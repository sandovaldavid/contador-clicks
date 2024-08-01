import React from "react";
import '../Styles/Button.css';

function Button({ text, isClickButton, clickFunction }) {
	return (
		<button
			className={isClickButton ? 'clickButton' : 'reseButton'}
			onClick={clickFunction}
		>
			{text}
		</button>
	);
}

export default Button;
