import styled from "styled-components";

export const Container = styled.div`
  position:fixed;
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
      height: 25rem;
    }
  @media screen and (min-width: 1700px){
    img {
      width: 40rem;
      height: 20rem;
    }
  }
`;

export const LoginContainer = styled.div`
  flex: 1;
  width:50%;
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
  @media screen and (min-width: 1500px){
    margin-top:3rem;
  }
`;

export const Label = styled.div`
  font-size: 2rem;
  display: flex;
  padding-bottom: 2rem;
`;

export const Input = styled.input`
  border-radius: 15px;
      padding: 1rem;
      width: 40rem;
      height: 2rem;
      margin-bottom: 1rem;
  @media screen and (min-width: 1700px){
    padding: 1rem;
    width: 45rem;
    height: 2rem;
    margin-bottom: 3rem;
  }
`;

export const Button = styled.button`
  background-color: #4C3327;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2rem;
    text-decoration: none;
    color: white;
    font-family: "HANAMDAUM";
  }

    width: 40rem;
    height: 5rem;
@media screen and (min-width: 1700px){
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

export const LoginBottom = styled.div`
  padding: 6rem;
`;

export const InputForm = styled.div`
  padding-bottom: 10rem;
`;
