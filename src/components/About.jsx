// About Component Module

import PropTypes from 'prop-types';
import '../styles/About.css';
import '../styles/BlinkAnimation.css';

const About = () => {
	return (
		<div className="about">
			<h2 className="about__title">About Me<span className="about__cursor"></span></h2>
			<p className="about__text">
				Hello, I`m a beginner Full-Stack developer and I`m exactly what you`re looking for. I can develop in Python and JavaScript, and create Full-Stack web applications based on them. My favorite Python framework is FastAPI, but I`m also very familiar with Django. My favorite JavaScript framework is React, but I can also develop in vanilla JS. I am able to work both in a team and independently. I have experience working with customers, and organizing my own business projects.
			</p>
		</div>
	)
};

About.propTypes = {
	aboutRef: PropTypes.number,
};

export default About;
