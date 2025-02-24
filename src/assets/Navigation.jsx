import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
return (
    <>
    <header>
        <nav>
            <ul>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/Login'}>Login</Link></li>
            </ul>
        </nav>
    </header>
    </>
)
}

export default Navigation
