import { AppProps } from 'next/app';

import { wrapper } from 'store';

import 'styles/index.css';

const KinoApp: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(KinoApp);
