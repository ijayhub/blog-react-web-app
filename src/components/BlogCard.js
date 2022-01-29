import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const BlogCard = ({ blogs }) => {
    return (
			<div className='row'>
				{blogs.map((blog) => (
					<div className='col-md-3 mb-3 ' key={blog.id}>
						<Link to={`/blogs/${blog.id}`} className='text-decoration-none'>
							<Card
								style={{ width: '18rem' }}
								className='mt-5 mb-3 img-fluid h-100 text-muted '>
								<Card.Img
									variant='top'
									src={blog.img}
									style={{ height: '200px', objectFit: 'cover' }}
								/>
								<Card.Body className='card-fill'>
									<Card.Title className='text-danger display-6'>
						 				{blog.title}
									</Card.Title>
									<Card.Text>{blog.author}</Card.Text>
									<Card.Link href={blog.readMore} className='text-dark'>
										Read More
									</Card.Link>
								</Card.Body>
							</Card>
						</Link>
					</div>
				))}
			</div>
		);
}

export default BlogCard
