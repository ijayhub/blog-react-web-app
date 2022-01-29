import React from 'react'
import { Nav, Form, FormControl, Button, Container, Navbar } from 'react-bootstrap/'
import { Link } from 'react-router-dom';
import { useState } from 'react'
// import BlogCard from './BlogCard'

const Navigation = () => {

	const [search, setSearch] = useState('')
	const handleSearch = () => {
		console.log('hello')
	}

	// const handleSearch = () => {};
	
    return (
			<div>
				<Navbar bg='light' expand='lg' className='mt-5'>
					<Container>
						<Navbar.Brand href='#' className='fw-bold text-danger'>
							CentRity
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='navbarScroll' />
						<Navbar.Collapse id='navbarScroll'>
							<Nav
								className='me-auto my-2 my-lg-0'
								style={{ maxHeight: '100px' }}
								navbarScroll>
								<Link to='/' className=' text-decoration-none'>
									<Nav.Link href='#action1' className='fw-bold text-danger'>
										Home
									</Nav.Link>
								</Link>
								<Link to='/Create' className=' text-decoration-none'>
									<Nav.Link href='#action1' className='fw-bold text-danger'>
										Add a new blog
									</Nav.Link>
								</Link>
							</Nav>
							<Form className='d-flex'>
								<FormControl
									type='search'
									placeholder='Search'
									className='me-2'
									aria-label='Search'
									value={search}
									onChange={(e) => setSearch(e.target.value)}
								/>
								<Button variant='outline-danger' onClick={handleSearch}>
									Search
								</Button>
								{/* <BlogCard
									blogs={blogs.filter((blog) => blog.author === '')}></BlogCard> */}
							</Form>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
}

export default Navigation
