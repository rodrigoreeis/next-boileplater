import ClassNames from 'classnames'
import Src from 'next/image'

const Image = ({ className, src, alt }) => (
  <figure className={ClassNames('figure', className)}>
    <Src src={src} alt={alt || ''} />
  </figure>
)

export default Image