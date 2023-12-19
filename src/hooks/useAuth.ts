import { useEffect, useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // localStorage 또는 쿠키에서 토큰이 있는지 확인
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;