import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
return (
        <nav className="">
            <div className="ccontainer">
                <Link to='/' className="brand-logo"><h2>LFJ Logo</h2></Link>
                <SignedInLinks/>
                {/* <SignedOutLinks/> */}
            </div>
        </nav>
        )
}

export default Navbar;