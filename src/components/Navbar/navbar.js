import React from 'react'
import './navbar.css'
import logo from '../../assets 2/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets 2/contact.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
    {/* <img src={logo} alt='logo' className='logo'/> */}
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>Client</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>

        </div>
        <button className='desktopMenuBtn'>
            <img src={contactImg} alt='' className='desktopMenuImg'/>Contact Me</button>
    </nav>
  )
}

export default Navbar