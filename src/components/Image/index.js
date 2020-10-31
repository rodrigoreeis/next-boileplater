import ClassNames from 'classnames'

const Image = ({ className, src, alt }) => (
  <figure className={ClassNames('figure', className)}>
    <img src={src} alt={alt || ''} />
  </figure>
)

export default Image