import React from 'react'

import fetch from 'isomorphic-unfetch'

import baseAPI from 'services/baseAPI'

import Layout from 'components/Layout'
import Container from 'components/Container'

import './Repositories.scss'

const Repositories = ({ repositories }) => (
  <Layout>
    <div className='repositories'>
      <Container>
        <span className='repositories__qty'>repositories: {repositories.length}</span>
        <ul className='repositories__list'>
          {repositories.map((repositorie) => (
            <li className='repositories__item' key={repositorie.id}>
              <a 
                href={repositorie.svn_url} 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <h1 className='repositories__item-name'>{repositorie.name}</h1>
                <p className='repositories__item-description'>{repositorie.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  </Layout>
)


Repositories.getInitialProps = async () => {
  
  const endpoint = `${baseAPI}/users/rodrigoreeis/repos`
  try {
    const response = await fetch(endpoint)
    const repositories = await response.json()
    return { repositories }
  } catch (error) {
    console.error('bar', error)
  }

}


export default Repositories
