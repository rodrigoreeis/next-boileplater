import classnames from 'classnames'

import './Container.scss'

const Container = ({ className, ...props }) => {
  const classNames = classnames('container', {
    [className]: className
  })

  return (
    <div className={classNames} {...props} />
  )
}

export default Container
