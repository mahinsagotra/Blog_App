import './Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='headerTitles'>
				<span className='headerTitleSm'>React & Node</span>
				<span className='headerTitleLg'>BLOG</span>
			</div>
			<img
				className='headerImg'
				src='https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg'
				alt='Img-header'
			/>
		</div>
	);
}

export default Header;
