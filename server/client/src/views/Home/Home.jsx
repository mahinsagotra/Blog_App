import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { axiosInstance } from '../../config';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/SideBar/Sidebar';
import './Home.css';

function Home() {
	const [posts, setPosts] = useState([]);
	const { search } = useLocation();

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axiosInstance.get('/posts' + search);
			//console.log(res);
			setPosts(res.data);
		};
		fetchPosts();
	}, [search]);
	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<Sidebar />
			</div>
		</>
	);
}

export default Home;
