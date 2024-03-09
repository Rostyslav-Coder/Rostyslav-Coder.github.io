// SkillCard Component Module

import PropTypes from 'prop-types';

const SkillCard = ({ image, name }) => {
	return (
		<div className="skill__card">
			<img src={image} alt="skill image" className="skill__image" />
			<h3 className="skill__name">{name}</h3>
		</div>
	);
};

SkillCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default SkillCard;
