// Projects Component Module

import { Parallax } from 'react-scroll-parallax';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
	return (
		<div className="projects">
			<h2 className="projects__title">My Projects:</h2>
			{projectsData.map(({ cardBg, cardName, cardImage, cardGHLink, cardViewLink, cardSpeed }, index) => {
				return (
					<Parallax className='parallax__box' key={index} speed={cardSpeed} scale={[0.8, 1.2]} >
						<ProjectCard
							key={index}
							cardBg={cardBg}
							cardImage={cardImage}
							cardName={cardName}
							cardGHLink={cardGHLink}
							cardViewLink={cardViewLink}
						/>
					</Parallax>
				);
			})}
		</div>
	);
};

export default Projects;
