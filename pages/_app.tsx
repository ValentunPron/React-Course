import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop - the best top</title>
			<link key={1} rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href='https://fonts.gstatic.com' />
			<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR: 100,300,regular,500,700&display=swap" rel='stylesheet' />
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;
