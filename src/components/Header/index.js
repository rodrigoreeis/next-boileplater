import React from 'react'
// import Link from 'next/link'
import Link from 'next/link'

import Container from 'components/Container'

import './Header.scss'

const Header = () => (
  <header className='header'>
    <Container >
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className='header__nav-item'>
            <Link href='/repositories'>
              <a>Repositories</a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
)

export default Header
