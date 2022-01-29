import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UseFetch from './UseFetch'

const BlogDetails = () => {
    const { id } = useParams()
    const {
			data: blog,
			error,
			isPending,
	} = UseFetch('http://localhost:8000/blogs/' + id);
	const navigate = useNavigate()
	
	const handleDelete = () => {
		fetch('http://localhost:8000/blogs/'+ blog.id, {
			method: 'DELETE',
		}).then(() => {
			navigate('/')
		})

	}
    return (
			<div className='blog-details'>
				{isPending && <div>Loading...</div>}
				{error && <div>{error}</div>}
				{blog && (
					<article>
						<h2>{blog.title}</h2>
						<p>Written by {blog.author}</p>
						<div>{blog.body}</div>
						<button className='btn btn-danger mt-4' onClick={handleDelete}>
							Delete blog
						</button>
					</article>
				)}
			</div>
		);
}

export default BlogDetails

