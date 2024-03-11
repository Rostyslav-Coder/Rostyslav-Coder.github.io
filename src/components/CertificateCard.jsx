// Certificate Card Component Module

import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';
import certificatesBtn from '../assets/certificates-img/certBtn.svg';

const CertificateCard = ({ cardName, cardSchool, cardImage, cardLink }) => {
	return (
		<Tilt
			className='certificates__card'
			tiltMaxAngleX={16}
			tiltMaxAngleY={16}
			transitionSpeed={1500}
			glareEnable={true}
			glareColor='#FFF'
			glareMaxOpacity={0.4}
			glareBorderRadius='1rem'
			scale={1} style={cardImage && { backgroundImage: `url(${cardImage})` }}
		>
			<h2 className='certificates__cardTitle'>{cardName} at {cardSchool}</h2>
			{cardLink && (
				<a className='certificates__cardLink' href={cardLink} target='_blank'>
					<img src={certificatesBtn} alt='Certificate Link Button' />
				</a>
			)}
		</Tilt>
	);
};

CertificateCard.propTypes = {
	cardName: PropTypes.string,
	cardSchool: PropTypes.string,
	cardImage: PropTypes.string,
	cardLink: PropTypes.string,
};

export default CertificateCard;
