// Hero Component Module

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import hero from '../assets/hero-img/myPhoto.webp'
import WelcomeText from './WelcomeText';
import '../styles/Hero.css';

const Hero = ({ heroRef }) => {
	const [heroStyle, setHeroStyle] = useState({});

	useEffect(() => {
		const startDelay = setTimeout(() => {
			setHeroStyle({
				transition: '2.5s',
				transitionProperty: 'opacity, transform',
				transformOrigin: 'bottom',
				transform: 'scale(1)',
				opacity: '1',
			});
		}, 1500)

		return () => {
			clearTimeout(startDelay);
		};
	}, []);

	return (
		<div className='hero'>
			<img className='hero__image' src={hero} alt='My photo' style={heroStyle} ref={heroRef} />
			<WelcomeText />
		</div>
	);
};

Hero.propTypes = {
	heroRef: PropTypes.object,
}
export default Hero;
