import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/error.css'

function Error() {
    return (
        <>
            <div className="error text-center">
                <h1>Oops !</h1>
                <p><h2>404</h2>Something Went Wrong!</p>
                <span>The page you're looking for does not seem to exist</span><br />
                <Link to='/'><button type='button'>Go to Home</button></Link>
            </div>
        </>
    )
}

export default Error