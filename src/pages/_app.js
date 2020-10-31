import 'styles/app.scss'
import { ContextProvider } from 'context'

const App = ({ Component, pageProps }) => (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
)

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}

export default App