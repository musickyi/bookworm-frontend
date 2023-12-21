import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
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
      width: 35rem;
      height: auto;
    }


  @media screen and (min-width: 1700px) {
    img {
      width: 40rem;
      height: auto;
    }
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

  @media screen and (min-width: 1500px) {
    margin-top: 3rem;
  }
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
  margin-bottom: 3rem;
  width: 40rem;
  height: 2rem;
  margin-bottom: 1rem;
  font-size:2rem;
  @media screen and (min-width: 1700px) {
    width: 45rem;
    height: 2rem;
    margin-bottom: 3rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : '#4C3327')};
  color: ${(props) => (props.disabled ?  'none' : '#ffffff')};
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "HANAMDAUM";
  font-size: 3rem;
  width: 42rem;
  height: 5rem;
  margin-top: 2rem;
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) => (props.disabled ? '#D9D9D9' : '#634124')};
  }
  @media screen and (min-width: 1700px) {
    width: 45rem;
    height: 5rem;
  }
`;

export const JoinLink = styled.div`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: black;
    padding: 2rem;
  }
`;

export const SignupBottom = styled.div`
  padding-bottom: 11rem;
 
`;

export const InputForm = styled.div`
  padding-bottom: 10rem;
`;
