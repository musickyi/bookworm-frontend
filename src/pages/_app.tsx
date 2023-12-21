import type { AppProps } from "next/app";
import { GlobalStyles } from '../styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from "../store/store";

const App = ({ Component, pageProps }: AppProps) => {


    return (
        <Provider store={store}>
            <GlobalStyles />
            <title>책벌레</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
