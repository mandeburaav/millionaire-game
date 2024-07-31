import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { PrizeProvider } from '@/components/Provider/PrizeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrizeProvider>
      <Component {...pageProps} />
    </PrizeProvider>
  );
}
