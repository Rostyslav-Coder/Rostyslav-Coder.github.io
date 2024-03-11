// App Component Module

import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';
import '../styles/App.css';

const App = () => {

	return (
		<ParallaxProvider className='aplication'>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Certificates />
		</ParallaxProvider>
	);
};

export default App;
