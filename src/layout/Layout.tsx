import { NavLink } from 'react-router'
import Logo from '../assets/temp_logo.png'
import LogoText from '../assets/logo-text.png'

import './Layout.css'

const navLinks = [
  { name: 'PORTRAITS', link: '/' },
  { name: 'NATURE', link: '/nature' },
  { name: 'ART', link: '/art' },
  { name: 'PRODUCT', link: '/product' },
  { name: 'ABOUT', link: '/about' },
  { name: 'CONTACT', link: '/contact' },
]

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='main-container'>
      <div className="headerContainer">
        <img src={Logo} className='logo' />
        <img src={LogoText} className='logo-text' />
        <div className='menuContainer'>
          {navLinks.map((link) =>
            <NavLink to={link.link} end className='link' key={link.name}>
              {link.name}
            </NavLink>)}
        </div>
      </div>
      {children}
      <div >
        <p className='disclaimer'>© Löwe Media 2025. All rights reserved. All images and content on this website are protected by copyright and may not be used, reproduced, or distributed without prior written permission.</p>
      </div>
    </div>
  )
}