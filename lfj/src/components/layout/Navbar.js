import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
return (
        <nav className="navBar-to-be-added">
            <div className="container-to-be-added">
                <Link to='/' className="brand-logo">Job Finder NavBar</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
        )
}

export default Navbar;