import type { AppProps } from "next/app";
import { AuthProvider } from '../pages/contexts/AuthContext'
import { GlobalStyles } from '../styles/GlobalStyles';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyles/>
            <title>책벌레</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <Component {...pageProps} />
        </>
    );
};

export default App;