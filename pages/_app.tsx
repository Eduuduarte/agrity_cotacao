import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider as ProductContextProvider } from '../context/product';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProductContextProvider>
      <Component {...pageProps} />
    </ProductContextProvider>
  )
}

export default MyApp
