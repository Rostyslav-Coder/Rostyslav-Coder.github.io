// App Component Module

import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import '../styles/App.css';

const App = () => {

	return (
		<div className="aplication">
			<Hero />
			<About />
			<Skills />
		</div>
	);
};

export default App;
