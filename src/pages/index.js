import React from 'react'

import Layout from 'layout'
import Container from 'components/Container'
import Section from 'components/Section'
import Head from 'components/Head'

import 'styles/pages/Home.module.scss'

const Home = () => {
  return (
    <Layout>
      <Head title='Hello World!' />
      <Section className='home'>
        <Container>
          <p className='home__title'>Hello World!</p>
        </Container>
      </Section>
    </Layout>
  )
}

export default Home


