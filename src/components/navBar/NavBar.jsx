import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <div>
            
                    <nav className='nav'>
                        <div className='nav-links'><NavLink to={'/'}>Home</NavLink></div>
                        <div className='nav-links'><NavLink to={'/about'}>About</NavLink></div>
                        <div className='nav-links'><NavLink to={'/service'}>Services</NavLink></div>
                        <div className='nav-links'><NavLink to={'/contact'}>Contact</NavLink></div>
                    </nav>
                
           

        </div>
    )
}

export default NavBar