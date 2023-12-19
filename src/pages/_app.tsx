import type { AppProps } from "next/app";
import { GlobalStyles } from '../styles/GlobalStyles';
import { useEffect, useState } from "react";
import LoginPage from "../components/LoginPage";
import API from "../api";
import useAuth from "../hooks/useAuth";
import { useRouter } from 'next/router';
import SignupPage from "../components/SignupPage";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    const isAuthenticated = useAuth();
    const [isTokenRefreshing, setIsTokenRefreshing] = useState(false);

    useEffect(() => {
        const refreshAccessToken = async () => {
            try {
                const response = await API.patch('/auth/refresh', {
                    refreshToken: localStorage.getItem('refreshToken'),
                });

                const newAccessToken = response.data.accessToken;

                localStorage.setItem('accessToken', newAccessToken);
                setIsTokenRefreshing(false);
            } catch (error) {
                console.error('토큰 갱신 실패:', error);
            }
        };

        const expiredAT = localStorage.getItem('expiredAT');
        if (expiredAT && isAuthenticated && !isTokenRefreshing) {
            const expirationTime = new Date(expiredAT).getTime();
            const currentTime = new Date().getTime();

            if (currentTime > expirationTime) {
                setIsTokenRefreshing(true);
                refreshAccessToken();
            }
        }
    }, [isAuthenticated, isTokenRefreshing]);

    useEffect(() => {
        // 페이지 이동 시에 실행되는 부분
        const handleRouteChange = (url: string) => {
            // 다른 경로로 이동할 때, 로그인이 필요한 경우 LoginPage로 리다이렉트
            if (url === '/user/join') {
                router.push('/user/join').then(() => {
                    throw new Error('Abort fetching component for route: "/join"');
                });

            } else if (!isAuthenticated && url !== '/user/join') {
                router.push('/login').then(() => {
                    throw new Error('Abort fetching component for route: "/join"');
                });
            }
        };

        // 페이지 이동 이벤트 리스너 등록
        router.events.on('routeChangeStart', handleRouteChange);

        // 컴포넌트 언마운트 시에 리스너 해제
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router, isAuthenticated]);

    return (
        <>
            <GlobalStyles />
            <title>책벌레</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />

            {isAuthenticated ? (
                <Component {...pageProps} />
            ) : (
                <LoginPage />
            )}
        </>
    );
};

export default App;