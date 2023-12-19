import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  flex: 1;
  background-color: #4C3327;
`;

export const LogoImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40rem;
    height: 20rem;
  }
`;

export const SignupContainer = styled.div`
  flex: 1;
  background-color: #F2EFE4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

export const Title = styled.div`
  padding: 2rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 2rem;
  display: flex;
  padding-bottom: 2rem;
`;

export const Input = styled.input`
  border-radius: 15px;
  width: 45rem;
  height: 2rem;
  padding: 1rem;
  margin-bottom:3rem;
`;

export const Button = styled.button`
  width: 47rem;
  height: 5rem;
  background-color: #D9D9D9;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "HANAMDAUM";
  font-size: 3rem;
`;

export const SignupBottom = styled.div`
  padding-bottom: 13rem;
`;
