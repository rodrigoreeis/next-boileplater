import React from 'react'

import fetch from 'isomorphic-unfetch'

import baseAPI from 'services/baseAPI'

import Avatar from 'components/Avatar'
import Container from 'components/Container'
import Layout from 'components/Layout'

import './Home.scss'

const Home = ({ user }) => {
  return (
    <Layout>
      <section className='user'>
        <Container className='user__container'>
          <Avatar image={user.avatar_url} alt={user.name}/>
          <h1 className='user__container-name'>{user.name}</h1>
          <p className='user__container-description'>{user.bio}</p>
          <span className='user__container-company'>Company: {user.company}</span>
          <span className='user__container-country'>Country: {user.location}</span>
          <span className='user__container-followers'>Fallowers: {user.followers}</span>
        </Container>
      </section>
    </Layout>
  )
}

Home.getInitialProps = async () => {
    const endpoint = `${baseAPI}/users/rodrigoreeis`
    try {
      const response = await fetch(endpoint)
      const user = await response.json()
      return { user }
    } catch (error) {
      console.error('bar', error)
    }
}


export default Home


