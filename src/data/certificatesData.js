// Certificates Data File

import { v4 as uuid4 } from 'uuid';
import odinProject from '../assets/certificates-img/odinProject.jpg';
import pythonPro from '../assets/certificates-img/pythonProCrt.jpg';
import pythonBasic from '../assets/certificates-img/pythonBasicCrt.jpg';
import manualQa from '../assets/certificates-img/manualQaCrt.jpg';

export const CERTIFICATES_DATA = [
	{
		id: uuid4(),
		cardName: 'Java Script',
		cardSchool: 'The Odin Project',
		cardImage: odinProject,
		cardLink: 'https://www.theodinproject.com/',
	},
	{
		id: uuid4(),
		cardName: 'Python PRO',
		cardSchool: 'Hillel IT School',
		cardImage: pythonPro,
		cardLink: 'https://certificate.ithillel.ua/view/96927982',
	},
	{
		id: uuid4(),
		cardName: 'Python Basic',
		cardSchool: 'Hillel IT School',
		cardImage: pythonBasic,
		cardLink: 'https://certificate.ithillel.ua/view/34010214',
	},
	{
		id: uuid4(),
		cardName: 'Manual QA',
		cardSchool: 'Hillel IT School',
		cardImage: manualQa,
		cardLink: 'https://certificate.ithillel.ua/view/30977795',
	},
];
