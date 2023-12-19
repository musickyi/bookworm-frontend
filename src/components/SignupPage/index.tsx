import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo2 from '../../../public/png/Group 42.png';
import API from '../../api';

const SignupPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSignup = async () => {
    try {
      const response:any = await API.post('/auth/signup', {
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
    <>
      <div style={{
        position: "absolute",
        width: "50%",
        height: "100%",
        backgroundColor: "#4C3327"
      }}>
        <Image src={Logo2} alt='Logo' priority={true} style={{ position: "absolute", width: "500px", height: "300px", left: "140px", top: "180px" }} />
      </div>
      <div style={{ position: "absolute", width: "50%", height: "100%", backgroundColor: "#F2EFE4", left: "756px" }}>
        <div style={{ position: "absolute", fontSize: "33px", left: "350px", top: "30px" }}>회원가입</div>
        <div>
          <div style={{ position: "absolute", fontSize: "33px", left: "80px", top: "120px" }}>아이디</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              position: "absolute", borderRadius: "15px", width: "600px", height: "50px", left: "80px", top: "200px"
            }} />
        </div>
        <div>
          <div style={{ position: "absolute", fontSize: "33px", left: "80px", top: "280px" }}>비밀번호</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              position: "absolute", borderRadius: "15px", width: "600px", height: "50px", left: "80px", top: "360px"
            }} />
        </div>
        <div>
          <div style={{ position: "absolute", fontSize: "33px", left: "80px", top: "440px" }}>닉네임</div>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{
              position: "absolute", borderRadius: "15px", width: "600px", height: "50px", left: "80px", top: "520px"
            }} />
        </div>
        <div>
          <button
            onClick={handleSignup}
            style={{
              position: "absolute", width: "600px", height: "78px", backgroundColor: "#D9D9D9", borderRadius: "15px", top: "650px", left: "80px", fontFamily:"HANAMDAUM", fontSize:"35px"
            }}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
