// Contacts Component Module

import locationImage from '../assets/contacts/locationLogo.webp';
import viberImage from '../assets/contacts/viberLogo.webp';
import telegramImage from '../assets/contacts/telegramLogo.webp';
import emailImage from '../assets/contacts/emailLogo.webp';
import githubImage from '../assets/contacts/githubLogo.webp';
import linkedinImage from '../assets/contacts/linkedinLogo.webp';
import websiteImage from '../assets/contacts/websiteLogo.webp';
import '../styles/Contacts.css';

const Contacts = () => {
	return (
		<div className='contacts'>
			<h2 className='contacts__title'>You can contact me</h2>
			<div className="contacts__row">
				<div className="contacts__col">
					<div className='contacts__item'>
						<p className='contacts__text'><img src={locationImage} alt='Location logo' />Location:</p>
						<p className='contacts__link'>Odesa, Odesa Oblast, Ukraine</p>
					</div>
					<div className='contacts__item'>
						<p className='contacts__text'><img src={viberImage} alt='Viber logo' />Viber:</p>
						<a className='contacts__link' href='tel:+380682240608'>+380682240608</a>
					</div>
					<div className='contacts__item'>
						<p className='contacts__text'><img src={telegramImage} alt='Telegram logo' />Telegram:</p>
						<a className='contacts__link' href='https://t.me/rostyslav_put' target='_blank' rel='noopener noreferrer'>
							https://t.me/rostyslav_put
						</a>
					</div>
					<div className='contacts__item'>
						<p className='contacts__text'><img src={emailImage} alt='Email logo' />Email:</p>
						<a className='contacts__link' href='mailto:rostyslavputnikov@gmail.com'>rostyslavputnikov@gmail.com</a>
					</div>
				</div>
				<div className="contacts__col">
					<div className='contacts__item'>
						<p className='contacts__text'><img src={githubImage} alt='GitHub logo' />GitHub:</p>
						<a className='contacts__link' href='https://github.com/Rostyslav-Coder' target='_blank' rel='noopener noreferrer'>https://github.com/Rostyslav-Coder</a>
					</div>
					<div className='contacts__item'>
						<p className='contacts__text'><img src={linkedinImage} alt='Linkedin logo' />LinkedIn:</p>
						<a className='contacts__link' href='https://www.linkedin.com/in/rostyslav-putnikov-76484926a' target='blank' rel='noopener noreferrer'>https://www.linkedin.com/in/rostyslav-putnikov-76484926a</a>
					</div>
					<div className='contacts__item'>
						<p className='contacts__text'><img src={websiteImage} alt='Website logo' />Website:</p>
					</div>
				</div>
			</div>
			<p className='contacts__copyLink'>&copy; 2024 Rostyslav-Coder. All rights reserved.</p>
		</div>
	);
};

export default Contacts;
