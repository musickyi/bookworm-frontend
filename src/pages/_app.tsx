import type { AppProps } from "next/app";
import { useEffect, useState } from "react"; // useState 추가
import { useRouter } from 'next/router';
import { GlobalStyles } from '../styles/GlobalStyles';
import LoginPage from "../components/LoginPage";
import API from "../api";
import useAuth from "../hooks/useAuth";
import { Provider } from 'react-redux';
import store from "../store/store";
import { TokenType } from "../type/TokenType";


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
