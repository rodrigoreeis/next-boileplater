import React from 'react'
import Helmet from 'react-helmet'

const Head = ({
  lang = 'pt-br',
  metaDescription,
  title,
  author
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta httpEquiv='content-language' content={lang} />
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta name='author' content={author} />
    </Helmet>
  )
}

export default Head
