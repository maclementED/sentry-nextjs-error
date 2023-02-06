import useTranslation from 'next-translate/useTranslation';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const { lang } = useTranslation();
  return (
    <Html lang={lang} style={{ colorScheme: 'dark' }}>
      <Head />
      <body className='bg-black'>
          <Main />
        <NextScript />
      </body>
    </Html>
  );
}
