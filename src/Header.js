import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>LLLLL</Link></li>
        <li><Link to='/schedule'>MMMMM</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
