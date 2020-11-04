import 'styles/app.scss'
import Compose from 'components/Compose'

import { ContextProvider } from 'context'

const App = ({ Component, pageProps }) => (
  <Compose providers={[ContextProvider]}>
    <Component {...pageProps} />
  </Compose>
)

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}

export default App
