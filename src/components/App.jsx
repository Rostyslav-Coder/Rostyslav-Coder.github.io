// App Component Module

import { useRef, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import '../styles/App.css';

const App = () => {
	const heroRef = useRef(null);
	const aboutRef = useRef(null);

	useEffect(() => {
		const heroObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
					const hero = heroRef.current;
					hero.style.transition = '750ms';
					hero.style.opacity = '0';
					hero.style.transitionProperty = 'opacity, transform';
					hero.style.transformOrigin = 'left';
					hero.style.transform = 'scale(0.7)';

					heroObserver.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });

		heroObserver.observe(aboutRef.current);

		return () => {
			heroObserver.disconnect();
		};
	}, []);

	return (
		<div className="aplication">
			<Hero heroRef={heroRef} />
			<About aboutRef={aboutRef} />
			<Skills />
		</div>
	);
};

export default App;
