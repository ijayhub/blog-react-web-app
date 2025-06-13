import React from 'react';
import UseFetch from './UseFetch';
import BlogCard from './BlogCard';

const Home = () => {
	const {
		data: blogs,
		isPending,
		error,
	} = UseFetch('http://localhost:8000/blogs');

	return (
		<div>
			<div>
				<div className='container '>
					<div className='text-center'>
						<h1 className='text-danger mt-5 display-3'>Nigerian fooods </h1>
						<div>
							{error && <div>{error}</div>}
							{isPending && <div>Loading....</div>}
							{blogs && <BlogCard blogs={blogs} />}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
