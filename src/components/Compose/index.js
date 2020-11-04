import { Fragment } from 'react'

const Compose = ({ providers = [], children }) => (
  <Fragment>
    {providers.reduceRight(
      (acc, Component) => (
        <Component>{acc}</Component>
      ),
      children
    )}
  </Fragment>
)

export default Compose
