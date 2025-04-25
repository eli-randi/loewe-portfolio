import { NavLink } from 'react-router'
import Logo from '../assets/temp_logo.png'

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
    <div>
      <div className="headerContainer">
        <img src={Logo} className='logo' />
        <div className='menuContainer'>
          {navLinks.map((link) =>
            <NavLink to={link.link} end className='link' key={link.name}>
              {link.name}
            </NavLink>)}
        </div>
      </div>
      {children}
    </div>
  )
}