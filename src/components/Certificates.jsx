// Certificates Component Module

import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import CertificateCard from './CertificateCard';
import certificatesBackGround from '../assets/certificates-img/certificatesBg.jpg';
import { CERTIFICATES_DATA } from '../data/certificatesData';
import '../styles/Certificates.css';

const Certificates = () => {
	return (
		<ParallaxBanner className="certificates">
			<ParallaxBannerLayer
				className='certificates__layer'
				image={certificatesBackGround}
				speed={-45}
				style={{ backgroundPosition: 'center', backgroundSize: '100%' }}
			/>
			<h2 className="certificates__title">My Certificates</h2>
			<div className="certificates__parallaxBox">
				{CERTIFICATES_DATA.map(({ id, cardName, cardSchool, cardImage, cardLink }, index) => {
					return (
						<Parallax
							className='certificates__parallaxSubBox'
							key={`${id}`}
							speed={20}
							scale={[0.8, 1.2, 'easeOutQuboc']}
						>
							<CertificateCard
								key={`${index}_${id}`}
								cardName={cardName}
								cardSchool={cardSchool}
								cardImage={cardImage}
								cardLink={cardLink}
							/>
						</Parallax>
					);
				})}
			</div>
		</ParallaxBanner>
	);
};

export default Certificates;
