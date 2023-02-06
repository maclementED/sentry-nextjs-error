import '@/styles/globals.css';
import '@/styles/preflight.css';
import { Roboto } from '@next/font/google';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '300', '400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <AnimatePresence mode="sync" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}
