// Contact Data File

import { v4 as uuidv4 } from 'uuid';
import locationImage from '../assets/contacts/locationLogo.webp';
import githubImage from '../assets/contacts/githubLogo.webp';
import viberImage from '../assets/contacts/viberLogo.webp';
import linkedinImage from '../assets/contacts/linkedinLogo.webp';
import telegramImage from '../assets/contacts/telegramLogo.webp';
import websiteImage from '../assets/contacts/websiteLogo.webp';
import emailImage from '../assets/contacts/emailLogo.webp';

export const CONTACT_DATA = [
	{
		id: uuidv4(),
		image: locationImage,
		name: 'Location',
		type: '',
		link: '',
		text: 'Odesa, Odesa Oblast, Ukraine',
	},
	{
		id: uuidv4(),
		image: githubImage,
		name: 'GitHub',
		type: 'https://',
		link: 'github.com/Rostyslav-Coder',
		text: 'https://github.com/Rostyslav-Coder',
	},
	{
		id: uuidv4(),
		image: viberImage,
		name: 'Viber',
		type: 'viber://chat?number=',
		link: '380682240608',
		text: '+380682240608',
	},
	{
		id: uuidv4(),
		image: linkedinImage,
		name: 'LinkedIn',
		type: 'https://',
		link: 'www.linkedin.com/in/rostyslav-putnikov-76484926a',
		text: 'https://www.linkedin.com/in/rostyslav-putnikov-76484926a',
	},
	{
		id: uuidv4(),
		image: telegramImage,
		name: 'Telegram',
		type: 'https://',
		link: 't.me/rostyslav_put',
		text: 'https://t.me/rostyslav_put',
	},
	{
		id: uuidv4(),
		image: websiteImage,
		name: 'Website',
		type: 'https://',
		link: 'rostyslav-coder.github.io/',
		text: 'https://rostyslav-coder.github.io/',
	},
	{
		id: uuidv4(),
		image: emailImage,
		name: 'Email',
		type: 'mailto:',
		link: 'rostyslavputnikov@gmail.com',
		text: 'rostyslavputnikov@gmail.com',
	},
];
