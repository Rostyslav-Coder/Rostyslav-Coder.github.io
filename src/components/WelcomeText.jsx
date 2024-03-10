// WelcomeText Component Module

import { useState, useEffect } from 'react';
import '../styles/WelcomeText.css';

const WelcomeText = () => {
	const content = 'hello myNameIs = () => {\nrostyslav.,Putnikov()\n};\nand I\'m = fullStack.,Developer()';
	const separators = /[, ]/;
	const [text, setText] = useState('');
	const [inputFieldStyle, setInputFieldStyle] = useState({});
	const [textOutput, setTextOutput] = useState(false);

	useEffect(() => {
		const fieldAnimationDelay = setTimeout(() => {
			setInputFieldStyle({
				transition: '2.5s',
				transitionProperty: 'opacity, width',
				width: '100%',
				opacity: '1',
			});
		}, 3000);

		const textAnimationDelay = setTimeout(() => {
			let i = -1;
			setTextOutput(true);
			const timer = setInterval(() => {
				if (i < content.length) {
					setText((prevText) => prevText + content[i]);
					i += 1;
				}
				if (i === content.length - 1) {
					clearInterval(timer);
				}
			}, 75);

			return () => clearInterval(timer);
		}, 5500);

		return () => {
			clearTimeout(fieldAnimationDelay);
			clearTimeout(textAnimationDelay);
		};
	}, []);


	return (
		<div className='welcomeText__titleBox' style={inputFieldStyle}>
			{textOutput && (
				<h1 className='welcomeText__title'>
					{text.split('\n').map((line, index) => (
						<>
							<span key={index}>
								{line.split(separators).map((word, wordIndex) => (
									<span key={wordIndex} className={`${word[0]}_${wordIndex}`}>
										{`${word} `}
									</span>
								))}
							</span>
							<br />
						</>
					))}
				</h1>
			)}
		</div>
	);
};

export default WelcomeText;
