import { useState } from "react"
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Ij');
	
	const [isPending, setIsPending] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		
		const blog = { title, body, author };
		setIsPending(true)
		
		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('new blog created')
			setIsPending(false)
			navigate('/')
		})

	}
	// const fileSelectedHandler = (e) => {
	// 	console.log(e)
	// }
	return (
		<div className='container'>
			<h3 className='my-5 text-center display-5 fw-bold text-danger'>
				Add a new blog card{' '}
			</h3>
			<Form onSubmit={handleSubmit}>
				{/* <Form.Group className='mb-3'>
					<Form.Label>Blog Image</Form.Label>
					<Form.Control
						type='file'
						required
						
						onChange={(fileSelectedHandler)}
					/>
				
				</Form.Group> */}
				<Form.Group className='mb-3'>
					<Form.Label>Blog Title</Form.Label>
					<Form.Control
						type='text'
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Blog Body</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						value={body}
						onChange={(e) => setBody(e.target.value)}
						required
					/>
				</Form.Group>
				<Form.Label>Choose blog Authors:</Form.Label>
				<br />
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value=''></option>
					<option value='Ij'>Ij</option>
					<option value='Onyi'>Onyi</option>
					<option value='Blessing'>Blessing</option>
					<option value='Kenechukwu'>Kenechukwu</option>
					<option value='Chi-Chi'>Chi-Chi</option>
					<option value='Charity'>Charity</option>
					<option value='Oluchi'>Oluchi</option>
					<option value='Kamsi'>Kamsi</option>
				</select>
				<div className='text-center'>
					{!isPending && (
						<button className='btn btn-danger mt-4' type={handleSubmit}>
							Add New Blog
						</button>
					)}
					{isPending && (
						<button
							className='btn btn-danger mt-4'
							type={handleSubmit}
							disabled>
							Adding New Blog.....
						</button>
					)}
				</div>
			</Form>
		</div>
	);
}

export default Create
