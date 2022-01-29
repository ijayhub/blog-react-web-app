import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
	return (
		<div className='container'>
			<div>
				<Navigation />
			</div>
			<div>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/Create' element={<Create />}></Route>
					<Route path='/blogs/:id' element={<BlogDetails />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
				
			</div>
		</div>
	);
}

export default App;
