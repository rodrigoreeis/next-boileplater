import ClassNames from 'classnames'

import './Button.module.scss'

const Button = ({ children, className, ...props }) => {

  return (
    <button {...props} className={ClassNames('button', className)}>
      {children}
    </button>
  )
}

export default Button
