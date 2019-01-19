import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
return (
    <ul className="nav">
        <li className="nav-item"><NavLink to='/'>Home</NavLink></li>
        <li className="nav-item"><NavLink to='/'>About</NavLink></li>
        <li className="nav-item"><NavLink to='/'>Contact</NavLink></li>
        <li className="nav-item"><NavLink to='/'>Log Out</NavLink></li>
    </ul>
        )
}

export default SignedInLinks;