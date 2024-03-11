// Projects Component Module

import { ParallaxBanner, ParallaxBannerLayer, Parallax } from 'react-scroll-parallax';
import ProjectCard from './ProjectCard';
import projectBackGround from '../assets/projects-img/projectsBg.jpg';
import { projectsDataLeft, projectsDataRight } from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
	return (
		<ParallaxBanner className="projects">
			<ParallaxBannerLayer
				className='projects__layer'
				image={projectBackGround}
				speed={-50}
				style={{ backgroundPosition: 'center', backgroundSize: '100%' }}
			/>
			<h2 className="projects__title">My Projects:</h2>
			<div className="parallax__box">
				<div className="parallax__boxLeft">
					{projectsDataLeft.map(({ cardBg, cardName, cardImage, cardGHLink, cardViewLink }, index) => {
						return (
							<Parallax
								className='parallax__subBoxLeft'
								key={index}
								speed={20}
								scale={[0.8, 1.2, 'easeOutQuboc']}
								opacity={[0.1, 1, 'easeOutQuint']}
								rotate={[-30, 0, 'easeOutQuint']}
							>
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
				<div className="parallax__boxRight">
					{projectsDataRight.map(({ cardBg, cardName, cardImage, cardGHLink, cardViewLink }, index) => {
						return (
							<Parallax
								className='parallax__subBoxRight'
								key={index}
								speed={20}
								scale={[0.8, 1.2, 'easeOutQubic']}
								opacity={[0.1, 1, 'easeOutQuint']}
								rotate={[30, 0, 'easeOutQuint']}
							>
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
			</div>
		</ParallaxBanner>
	);
};

export default Projects;
