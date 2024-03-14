// Hero Component Module

import { useState, useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer, Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import hero from '../assets/hero-img/myPhoto.webp';
import heroBackGround from '../assets/hero-img/heroBg.jpg';
import WelcomeText from './WelcomeText';
import '../styles/Hero.css';

const Hero = () => {
	const [heroStyle, setHeroStyle] = useState({});

	useEffect(() => {
		const startDelay = setTimeout(() => {
			setHeroStyle({
				transition: '2.5s',
				transitionProperty: 'opacity, transform',
				transformOrigin: 'bottom',
				transform: 'scale(1.2)',
				opacity: '1',
			});
		}, 1500)

		return () => {
			clearTimeout(startDelay);
		};
	}, []);

	return (
		<ParallaxBanner className='hero'>
			<ParallaxBannerLayer
				className='hero__layer'
				image={heroBackGround}
				speed={-25}
				style={{ backgroundPosition: 'top' }}
			/>
			<img className='hero__image' src={hero} alt='My photo' style={heroStyle} />
			<Parallax className='hero__parallaxBox' speed={15}>
				<WelcomeText />
			</Parallax>
		</ParallaxBanner >
	);
};

Hero.propTypes = {
	heroRef: PropTypes.object,
}
export default Hero;
