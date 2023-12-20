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
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!passwordRegex.test(password)) {
        alert('비밀번호는 영어,숫자포함 8자리 이상이여야 합니다. ');
        return;
      }
      const response: any = await API.post('/auth/signup', {
        id:username,
        password:password,
        nickname:nickname,
      });
      if (response.data.ok) {
        router.push('/login');
      } else {
        console.error('Signup failed:', response.error);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  const isFormValid = () => {
    return username !== '' && password !== '' && nickname !== '';
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

          <S.Button onClick={handleSignup} disabled={!isFormValid()}>
            회원가입
          </S.Button>
        </S.SignupBottom>
      </S.SignupContainer>
    </S.Container >
  );
};

export default SignupPage;