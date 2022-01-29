import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center text-danger mt-5'>
            <h3>Sorry</h3>
            <p>page not found 404</p>
            <Link to='/' className='text-danger'>Back to homepage</Link>
        
        </div>
    )
}

export default NotFound
