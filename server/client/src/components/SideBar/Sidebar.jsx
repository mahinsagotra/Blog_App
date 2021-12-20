import { useState, useEffect } from 'react';
import { axiosInstance } from '../../config';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axiosInstance.get('/categories');
			setCats(res.data);
		};
		getCats();
	}, []);

	return (
		<div className='sidebar'>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>ABOUT ME</span>
				<img
					src='https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
					alt='post-img'
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Debitis, omnis quam! Dolores quam beatae.
				</p>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>CATEGORIES</span>
				<ul className='sidebarList'>
					{cats.map((c) => (
						<Link className='link' to={`/?cat=${c.name}`}>
							<li className='sidebarListItem'>{c.name}</li>
						</Link>
					))}
				</ul>
			</div>
			<div className='sidebarItem'>
				<span className='sidebarTitle'>FOLLOW US!</span>
				<div className='sidebarSocial'>
					<i className='sidebarIcon fab fa-facebook-square'></i>
					<i className='sidebarIcon fab fa-twitter-square'></i>
					<i className='sidebarIcon fab fa-pinterest-square'></i>
					<i className='sidebarIcon fab fa-instagram-square'></i>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
