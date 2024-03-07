// Hero Component Module

import hero from '../assets/hero-img/myPhoto.webp'
import WelcomeText from './WelcomeText';
import '../styles/Hero.css';

const Hero = () => {
	return (
		<div className='hero'>
			<img className='hero__image' src={hero} alt='My photo' width={'40%'} />
			<WelcomeText />
		</div>
	);
};

export default Hero;
