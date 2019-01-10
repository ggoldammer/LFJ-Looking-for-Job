import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
return (
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/'>Contact</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
    </ul>
        )
}

export default SignedInLinks;