import type { AppProps } from "next/app";
import { useEffect, useState } from "react"; // useState 추가
import { useRouter } from 'next/router';
import { GlobalStyles } from '../styles/GlobalStyles';
import LoginPage from "../components/LoginPage";
import API from "../api";
import useAuth from "../hooks/useAuth";
import { Provider } from 'react-redux';
import store from "../store/store";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const isAuthenticated = useAuth();
    const [isTokenRefreshing, setIsTokenRefreshing] = useState(false); // state 추가

    useEffect(() => {
        const refreshAccessToken = async () => {
            try {
                const response = await API.patch('/auth/refresh', {
                    refreshToken: localStorage.getItem('refreshToken'),
                });

                const newAccessToken = response.data.accessToken;
                localStorage.setItem('accessToken', newAccessToken);
            } catch (error) {
                console.error('토큰 갱신 실패:', error);
            } finally {
                setIsTokenRefreshing(false);
            }
        };

        const handleRouteChange = (url: string) => {
            if (url === '/login' && isAuthenticated) {
                return;
            }

            if (url === '/user/join') {
                return;
            }

            if (!isAuthenticated && url !== '/login') {
                router.push('/login')
                    .then(() => {
                        throw new Error('Abort fetching component for route: "/login"');
                    });
            }
        };

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router, isAuthenticated]);

    return (
        <Provider store={store}>
            <GlobalStyles />
            <title>책벌레</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            {isAuthenticated ? (
                <Component {...pageProps} />
            ) : (
                router.pathname === '/user/join' ? (
                    <Component {...pageProps} />
                ) : (
                    <LoginPage />
                )
            )}
        </Provider>
    );
};

export default App;
