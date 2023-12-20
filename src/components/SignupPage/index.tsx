import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../../../public/png/Logo.png'
import API from '../../api';
import * as S from './style';

const SignupPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignup = async () => {
    try {
      const response: any = await API.post('/auth/signup', {
        username,
        password,
        nickname,
      });

      if (response.ok) {
        // 회원가입이 성공하면 로그인 페이지로 이동
        router.push('/login');
      } else {
        // 회원가입 실패 시에 대한 처리 (예: 에러 메시지 출력)
        console.error('Signup failed:', response.error);
      }
    } catch (error) {
      // 네트워크 오류 또는 다른 예외 상황에 대한 처리
      console.error('Error during signup:', error);
    }
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoImage>
          <Image src={Logo} alt='Logo' priority={true} />
        </S.LogoImage>
      </S.LogoContainer>
      <S.SignupContainer>
        <S.Title>회원가입</S.Title>
        <S.SignupBottom>
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
          <div>
            <S.Label>닉네임</S.Label>
            <S.Input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <S.Button onClick={handleSignup}>회원가입</S.Button>
        </S.SignupBottom>
      </S.SignupContainer>
    </S.Container >
  );
};

export default SignupPage;