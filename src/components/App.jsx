// App Component Module

import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import '../styles/App.css';

const App = () => {

	return (
		<ParallaxProvider className='aplication'>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Education />
		</ParallaxProvider>
	);
};

export default App;
