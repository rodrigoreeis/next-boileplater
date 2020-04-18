import React from 'react'

import Link from 'next/link'

const Home = () => {
  return (
    <main className='home'>
      <h1 onClick={() => console.log(`${Link}`)} 
        className='home__title'>
        Page Home
      </h1>
      <Link href='/about'>About</Link>
    </main>
  )
}

export default Home
