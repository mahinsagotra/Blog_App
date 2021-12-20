import './Single.css';
import Sidebar from '../../components/SideBar/Sidebar';
import SinglePost from '../../components/SinglePost/SinglePost';

function Single() {
	return (
		<div className='single'>
			<SinglePost />
			<Sidebar />
		</div>
	);
}

export default Single;
