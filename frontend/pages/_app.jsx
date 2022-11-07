import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import 'react-multi-carousel/lib/styles.css';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import { ThemeContext } from '../context/ThemeContext';
import createEmotionCache from '../src/createEmotionCache';
import { store } from '../store';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeContext>
          <CssBaseline />
          <Layout>
            <NextNProgress />
            <Toaster />
            <Component {...pageProps} />
          </Layout>
        </ThemeContext>
      </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
};
