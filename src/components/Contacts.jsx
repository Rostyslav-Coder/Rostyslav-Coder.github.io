// Contacts Component Module

import ContactItem from './ContactItem';
import { CONTACT_DATA } from '../data/contactData';
import '../styles/Contacts.css';

const Contacts = () => {
	return (
		<div className='contacts'>
			<h2 className='contacts__title'>You can contact me</h2>
			<div className="contacts__row">
				<div className="contacts__col">
					{CONTACT_DATA.map(({ image, name, type, link, text }, index) => {
						if (index % 2 === 0) {
							return <ContactItem key={index} image={image} name={name} type={type} link={link} text={text} />
						}
					})}
				</div>
				<div className="contacts__col">
					{CONTACT_DATA.map(({ image, name, type, link, text }, index) => {
						if (index % 2 !== 0) {
							return <ContactItem key={index} image={image} name={name} type={type} link={link} text={text} />
						}
					})}
				</div>
			</div>
			<p className='contacts__copyLink'>&copy; 2024 Rostyslav-Coder. All rights reserved.</p>
		</div>
	);
};

export default Contacts;
