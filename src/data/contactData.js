// Contact Data File

import locationImage from '../assets/contacts/locationLogo.webp';
import githubImage from '../assets/contacts/githubLogo.webp';
import viberImage from '../assets/contacts/viberLogo.webp';
import linkedinImage from '../assets/contacts/linkedinLogo.webp';
import telegramImage from '../assets/contacts/telegramLogo.webp';
import websiteImage from '../assets/contacts/websiteLogo.webp';
import emailImage from '../assets/contacts/emailLogo.webp';

export const CONTACT_DATA = [
	{
		image: locationImage,
		name: 'Location',
		type: '',
		link: '',
		text: 'Odesa, Odesa Oblast, Ukraine',
	},
	{
		image: githubImage,
		name: 'GitHub',
		type: 'https://',
		link: 'github.com/Rostyslav-Coder',
		text: 'https://github.com/Rostyslav-Coder',
	},
	{
		image: viberImage,
		name: 'Viber',
		type: 'viber://chat?number=',
		link: '380682240608',
		text: '+380682240608',
	},
	{
		image: linkedinImage,
		name: 'LinkedIn',
		type: 'https://',
		link: 'www.linkedin.com/in/rostyslav-putnikov-76484926a',
		text: 'https://www.linkedin.com/in/rostyslav-putnikov-76484926a',
	},
	{
		image: telegramImage,
		name: 'Telegram',
		type: 'https://',
		link: 't.me/rostyslav_put',
		text: 'https://t.me/rostyslav_put',
	},
	{
		image: websiteImage,
		name: 'Website',
		type: '',
		link: '',
		text: 'My Web Page',
	},
	{
		image: emailImage,
		name: 'Email',
		type: 'mailto:',
		link: 'rostyslavputnikov@gmail.com',
		text: 'rostyslavputnikov@gmail.com',
	},
];
