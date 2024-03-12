// Projects Data File

import { v4 as uuid_4 } from 'uuid';
import memoryGameBg from '../assets/projects-img/memoryGame/memoryGameBg.jpg';
import memoryGameLogo from '../assets/projects-img/memoryGame/memoryGameLogo.webp';
import restaurantPageBg from '../assets/projects-img/restaurantPage/restaurantPageBg.jpg';
import restaurantPageLogo from '../assets/projects-img/restaurantPage/restaurantPageLogo.webp';
import carRepairShopBg from '../assets/projects-img/carRepairShop/carRepairShopBg.jpg';
import carRepairShopLogo from '../assets/projects-img/carRepairShop/carRepairShopLogo.webp';
import realEstatePageBg from '../assets/projects-img/realEstatePage/realEstatePageBg.jpg';
import realEstatePageLogo from '../assets/projects-img/realEstatePage/realEstateLogo.webp';
import ticTacToeGameBg from '../assets/projects-img/ticTacToeGame/ticTacToeGameBg.jpg';
import ticTacToeGameLogo from '../assets/projects-img/ticTacToeGame/ticTacToeGameLogo.webp';
import steampunkCalculatorBg from '../assets/projects-img/steampankCalculator/steampunkCalculatorBg.jpg';
import steampunkCalculatorLogo from '../assets/projects-img/steampankCalculator/steampunkCalculatorLogo.webp';
import cvBuilderBg from '../assets/projects-img/cvBuilder/cvBuilderBg.jpg';

const PROJECTS_DATA = [
	{
		id: uuid_4(),
		cardBg: memoryGameBg,
		cardName: 'Memory Game',
		cardImage: memoryGameLogo,
		cardGHLink: 'https://github.com/Rostyslav-Coder/memory-game',
		cardViewLink: 'https://rostyslav-coder.github.io/memory-game/',
		cardSpeed: '1',
	},
	{
		id: uuid_4(),
		cardBg: carRepairShopBg,
		cardName: 'Car Repair Shop',
		cardImage: carRepairShopLogo,
		cardGHLink: 'https://github.com/Rostyslav-Coder/react-car-repair-shop/tree/main',
		cardViewLink: 'https://rostyslav-coder.github.io/react-car-repair-shop/',
		cardSpeed: '10',
	},
	{
		id: uuid_4(),
		cardBg: restaurantPageBg,
		cardName: 'Restaurant Page',
		cardImage: restaurantPageLogo,
		cardGHLink: 'https://github.com/Rostyslav-Coder/restaurant--page/tree/main',
		cardViewLink: 'https://rostyslav-coder.github.io/restaurant--page/',
		cardSpeed: '1',
	},
	{
		id: uuid_4(),
		cardBg: realEstatePageBg,
		cardName: 'Real Estate Page',
		cardImage: realEstatePageLogo,
		cardGHLink: 'https://github.com/Rostyslav-Coder/real-estate',
		cardViewLink: 'https://rostyslav-coder.github.io/real-estate/',
		cardSpeed: '10',
	},
	{
		id: uuid_4(),
		cardBg: ticTacToeGameBg,
		cardName: 'Tic Tac Toe Game',
		cardImage: ticTacToeGameLogo,
		cardGHLink: 'https://github.com/Rostyslav-Coder/tic-tac-toe',
		cardViewLink: 'https://rostyslav-coder.github.io/tic-tac-toe/',
		cardSpeed: '1',
	},
	{
		id: uuid_4(),
		cardBg: steampunkCalculatorBg,
		cardName: 'Steampunk Calculator',
		cardImage: steampunkCalculatorLogo,
		cardGHLink: 'https://github.com/Rostyslav-Coder/calculator',
		cardViewLink: 'https://rostyslav-coder.github.io/calculator/',
	},
	{
		id: uuid_4(),
		cardBg: cvBuilderBg,
		cardName: 'CV Builder',
		cardGHLink: 'https://github.com/Rostyslav-Coder/react-cv-constructor',
		cardViewLink: 'https://rostyslav-coder.github.io/react-cv-constructor/',
	},
];

export default PROJECTS_DATA;
