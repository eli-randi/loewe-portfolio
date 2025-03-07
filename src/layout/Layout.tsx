import { NavLink } from 'react-router'
import Logo from '../assets/temp_logo.png'

import './Layout.css'

const navLinks = [
  { name: 'HOME', link: '/' },
  { name: 'MUSIC', link: '/music' },
  { name: 'ABOUT', link: '/about' },
  { name: 'CONTACT', link: '/contact' },
]

export const Layout = ({ children }) => {
  return (
    <div>
      <div className="headerContainer">
        <img src={Logo} className='logo' />
        <div className='menuContainer'>
          {navLinks.map((link) =>
            <NavLink to={link.link} end className='link'>
              {link.name}
            </NavLink>)}
        </div>
      </div>
      {children}
    </div>
  )
}