import React from 'react'

import './Layout.module.scss'

const Layout = ({ children }) => (
  <main className='layout__main'>
    {children}
  </main>
)

export default Layout
