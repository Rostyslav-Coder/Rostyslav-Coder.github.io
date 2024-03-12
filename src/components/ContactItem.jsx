// ContactItem Component Module

import PropTypes from 'prop-types';

const ContactItem = ({ image, name, link, type, text }) => {
	return (
		<div className='contacts__item'>
			<p className='contacts__text'><img src={image} alt={`${name} logo`} />{name}:</p>
			{
				link ?
					(
						<a className='contacts__link'
							href={`${type}${link}`} target='_blank'
							rel='noopener noreferrer'>{text}
						</a>
					) : (<p className='contacts__link'>{text}</p>)
			}
		</div >
	);
};

ContactItem.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	link: PropTypes.string,
	text: PropTypes.string,
};

export default ContactItem;
