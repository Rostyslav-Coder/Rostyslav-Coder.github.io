// Projects Component Module

import { useState, useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer, Parallax } from 'react-scroll-parallax';
import ProjectCard from './ProjectCard';
import projectBackGround from '../assets/projects-img/projectsBg.jpg';
import PROJECTS_DATA from '../data/projectsData';
import '../styles/Projects.css';

const Projects = () => {
	const [orientation, setOrientation] = useState(
		window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
	);

	useEffect(() => {
		const handleResize = () => {
			setOrientation(window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<ParallaxBanner className='projects'>
			<ParallaxBannerLayer
				className='projects__layer'
				image={projectBackGround}
				speed={-10}
				style={{ backgroundPosition: 'center' }}
			/>
			<h2 className='projects__title'>My Projects</h2>
			<div className='parallax__box'>
				{orientation === 'portrait' ? (
					PROJECTS_DATA.map(({ id, cardBg, cardName, cardImage, cardGHLink, cardViewLink }, index) => {
						return (
							<>
								<Parallax
									className='parallax__subBoxCenter'
									key={id}
									speed={30}
									scale={[0.8, 1.2, 'easeOutQuboc']}
									opacity={[0.1, 1, 'easeOutQuint']}
								>
									<ProjectCard
										key={`${index}_${id}`}
										cardBg={cardBg}
										cardImage={cardImage}
										cardName={cardName}
										cardGHLink={cardGHLink}
										cardViewLink={cardViewLink}
									/>
								</Parallax>
							</>
						)
					})
				) : (
					<>
						<div className='parallax__boxLeft'>
							{PROJECTS_DATA.map(({ id, cardBg, cardName, cardImage, cardGHLink, cardViewLink }, index) => {
								if (index % 2 === 0) {
									return (
										<Parallax
											className='parallax__subBoxLeft'
											key={id}
											speed={20}
											scale={[0.8, 1.2, 'easeOutQuboc']}
											opacity={[0.1, 1, 'easeOutQuint']}
											rotate={[-30, 0, 'easeOutQuint']}
										>
											<ProjectCard
												key={`${index}_${id}`}
												cardBg={cardBg}
												cardImage={cardImage}
												cardName={cardName}
												cardGHLink={cardGHLink}
												cardViewLink={cardViewLink}
											/>
										</Parallax>
									);
								}
							})}
						</div>
						<div className='parallax__boxRight'>
							{PROJECTS_DATA.map(({ id, cardBg, cardName, cardImage, cardGHLink, cardViewLink }, index) => {
								if (index % 2 !== 0) {
									return (
										<Parallax
											className='parallax__subBoxRight'
											key={id}
											speed={20}
											scale={[0.8, 1.2, 'easeOutQubic']}
											opacity={[0.1, 1, 'easeOutQuint']}
											rotate={[30, 0, 'easeOutQuint']}
										>
											<ProjectCard
												key={`${index}_${id}`}
												cardBg={cardBg}
												cardImage={cardImage}
												cardName={cardName}
												cardGHLink={cardGHLink}
												cardViewLink={cardViewLink}
											/>
										</Parallax>
									);
								}
							})}
						</div>
					</>
				)}
			</div>
		</ParallaxBanner >
	);
};

export default Projects;
