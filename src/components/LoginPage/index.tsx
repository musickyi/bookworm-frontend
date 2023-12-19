import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../../public/png/Group 42.png'
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

      // 토큰 저장
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
    <>
      <div style={{
        position: "absolute",
        width: "50%",
        height: "100%",
        backgroundColor: "#4C3327"
      }}>
        <Image src={Logo} alt='Logo' priority={true} style={{ position: "absolute", width: "500px", height: "300px", left: "140px", top: "180px" }} />
      </div>
      <div style={{ position: "absolute", width: "50%", height: "100%", backgroundColor: "#F2EFE4", left: "756px" }}>
        <div style={{ position: "absolute", fontSize: "33px", left: "350px", top: "30px" }}>로그인</div>
        <div>
          <div style={{ position: "absolute", fontSize: "33px", left: "80px", top: "120px" }}>아이디</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              position: "absolute", borderRadius: "15px", width: "600px", height: "50px", left: "80px", top: "200px"
            }}
          />
        </div>
        <div>
          <div style={{ position: "absolute", fontSize: "33px", left: "80px", top: "300px" }}>비밀번호</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              position: "absolute", borderRadius: "15px", width: "600px", height: "50px", left: "80px", top: "380px"
            }}
          />
        </div>
        <div>
          <button
            onClick={handleLogin}
            style={{
              position: "absolute", width: "600px", height: "78px", backgroundColor: "#4C3327", borderRadius: "15px", top: "550px", left: "80px"
            }}>
            <Link
              style={{ textDecoration: "none", color: "white", fontSize: "35px", fontFamily: "HANAMDAUM" }}
              href={''}
            >
              로그인
            </Link>
          </button>
          <div style={{ position: "absolute", left: "300px", top: "650px" }}>
            <Link href='/user/join'> 회원가입 하러가기 {'>'}</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
