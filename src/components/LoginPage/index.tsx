import * as S from './style'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../../public/png/Logo.png'
import Link from 'next/link';
import API from '../../api';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await API.post('/auth/login', {
        username,
        password,
      });

      const { accessToken, refreshToken, expiredAT } = response.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expiredAT', expiredAT);

      console.log('로그인 성공!');
      router.push('/dashboard');
    } catch (error) {
      console.error('로그인 실패. 아이디와 비밀번호를 확인하세요.');
    }
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoImage>
          <Image src={Logo} alt='Logo' priority={true} />
        </S.LogoImage>
      </S.LogoContainer>
      <S.LoginContainer>
        <S.Title>로그인</S.Title>
        <S.InputForm>
          <div>
            <S.Label>아이디</S.Label>
            <S.Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </S.InputForm>
        <S.LoginBottom>
          <S.Button onClick={handleLogin}>
            <Link href={''}>
              <span>로그인</span>
            </Link>
          </S.Button>
          <S.JoinLink>
            <Link href='/user/join'>  회원가입 하러가기 {'>'}</Link>
          </S.JoinLink>
        </S.LoginBottom>
      </S.LoginContainer>
    </S.Container>
  );
};

export default LoginPage;
