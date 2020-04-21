import React from 'react'

import Header from 'components/Header'

import './Layout.scss'

const Layout = ({ children }) => (
  <>
    <Header/>
    <main className='layout__main'>
      {children}
    </main>
  </>
)

export default Layout
