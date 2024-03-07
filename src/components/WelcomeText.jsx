// WelcomeText Component Module

import '../styles/WelcomeText.css';

const WelcomeText = () => {
	return (
		<div className='welcomeText__titleBox'>
			<h2 className='welcomeText__subTitle'>
				<span className='violet'>hello </span>
				<span className='green'>myNameIs </span>
				<span className='red'>= </span>
				<span className='yellow'>&#40;</span>
				{/* <spap className='orange'>is</spap> */}
				<span className='yellow'>&#41; </span>
				<span className='red'>=&gt; </span>
				<span className='yellow'>&#123;</span>
			</h2>
			<h1 className='welcomeText__title'>
				<span>&nbsp;&nbsp;</span>
				<span className='green'>rostyslav.</span>
				<span className='blue'>Putnikov</span>
				<span className='yellow'>()</span>
				<span className='grey'>;</span>
			</h1>
			<h2 className='hero__subTitle'>
				<span className='yellow'>&#125;</span>
				<span className='grey'>;</span>
			</h2>
			<h2 className='welcomeText__subTitle'>
				<span className='violet'>and </span>
				<span className='green'>I`m </span>
				<span className='red'>= </span>
				<span className='green'>fullStack.</span>
				<span className='blue'>Developer</span>
				<span className='yellow'>()</span>
				<span className='grey'>;</span>
				<span className='cursor'></span>
			</h2>
		</div>
	);
};

export default WelcomeText;
