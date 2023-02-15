import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/global.css'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }