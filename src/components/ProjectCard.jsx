// ProjectCard Component Module

import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';

const ProjectCard = ({ cardBg, cardName, cardImage, cardGHLink, cardViewLink }) => {
	return (
		<Tilt
			className='project__card'
			tiltMaxAngleX={16}
			tiltMaxAngleY={16}
			transitionSpeed={1500}
			glareEnable={true}
			glareColor='#FFF'
			glareMaxOpacity={0.4}
			glareBorderRadius='1rem'
			scale={1}
			style={cardBg && { backgroundImage: `url(${cardBg})` }}
		>
			<h3 className='project__cardTitle'>{cardName}</h3>
			{cardImage && <img src={cardImage} className='projects__cardImg' alt={`${name} image`} />}
			<div className="project__cardLinksBox">
				{cardGHLink && <a className='project__cardGit' href={cardGHLink} target='_blank' rel='noopener noreferrer'></a>}
				{cardViewLink && <a className='project__cardLink' href={cardViewLink} target='_blank' rel='noopener noreferrer'></a>}
			</div>
		</Tilt >
	);
};

ProjectCard.propTypes = {
	cardBg: PropTypes.string,
	cardName: PropTypes.string,
	cardImage: PropTypes.string,
	cardGHLink: PropTypes.string,
	cardViewLink: PropTypes.string,
};

export default ProjectCard;
