import React from 'react'

import './Avatar.scss'

const Avatar = ({ image, alt }) => (
  <figure className='avatar'>
    <img 
      className='avatar__image'
      src={image} 
      alt={alt} 
    />
  </figure>
)

export default Avatar
