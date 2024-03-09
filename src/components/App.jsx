// App Component Module

import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import '../styles/App.css';

const App = () => {

	return (
		<div className="aplication">
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Education />
		</div>
	);
};

export default App;
