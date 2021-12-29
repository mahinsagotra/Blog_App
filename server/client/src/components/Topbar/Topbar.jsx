import './Topbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Topbar() {
	const { user, dispatch } = useContext(Context);
	const PF = 'https://blog-app-mahin.herokuapp.com/images/';

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
	};

	return (
		<div className='top'>
			<div className='topLeft'>
				<div className='item'>
					<a href='/' className='link'>
						<div className='logo-section-left'>
							<p
								style={{
									fontSize: 'x-large',
									marginLeft: '5px',
								}}
							>
								My Blogs
							</p>
						</div>
					</a>
				</div>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<li className='topListItem'>
						<Link className='link' to='/'>
							HOME
						</Link>
					</li>
					<li className='topListItem'>ABOUT</li>
					<li className='topListItem'>CONTACT</li>
					<li className='topListItem'>
						<Link className='link' to='/write'>
							WRITE
						</Link>
					</li>
					<li className='topListItem' onClick={handleLogout}>
						{user && 'LOGOUT'}
					</li>
				</ul>
			</div>
			<div className='topRight'>
				{user ? (
					<Link className='link' to='/settings'>
						<img
							className='topImg'
							src={PF + user.profilePic}
							alt=''
						/>
					</Link>
				) : (
					<ul className='topList'>
						<li className='topListItem'>
							<Link className='link' to='/login'>
								LOGIN
							</Link>
						</li>
						<li className='topListItem'>
							<Link className='link' to='/register'>
								REGISTER
							</Link>
						</li>
					</ul>
				)}
				<i className='topSearchIcon fas fa-search'></i>
			</div>
		</div>
	);
}
