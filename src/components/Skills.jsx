// Skills Component Module

import SkillCard from './SkillCard';
import skillData from '../data/skillsData.js';
import '../styles/Skills.css';
import '../styles/BlinkAnimation.css';

const Skills = () => {
	return (
		<div className="skills">
			<h2 className="skills__title">My Skills<span className='skills__cursor'></span></h2>
			<div className="skills__box">
				{skillData.map(({ url, name }, index) => {
					return <SkillCard key={index} image={url} name={name} />
				})}
			</div>
		</div>
	);
};

export default Skills;
