import ClassNames from 'classnames'

const Section = ({ className, children, ...props }) => (
  <section className={ClassNames('section', className)} {...props}>
    {children}
  </section>
)

export default Section