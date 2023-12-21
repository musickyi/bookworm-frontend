import Image from "next/image";
import styled from "styled-components";

export const Logo = styled(Image)`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;

`;

export const ContentWrapper = styled.div`
  position: fixed;
  flex-direction:column;
  display:flex;
  align-items:center;
  justify-content:center;
  top:5rem;
  width: 100%;
  height: 100vh;
  background-color: #F2EFE4;
  z-index:-2;
`;

export const WritingSection = styled.div`
  display:flex;
  font-size: 1.875rem;
  justify-cotent:flex-start;
  align-items:flex-start;
  width:46%;
  padding:1rem;
  z-index:3;
  @media screen and (min-width: 1700px){
    width:40%;
  }
`;

export const TitleInput = styled.input`
  position: relative;
  font-size: 1.3rem;
  border:none;
  background-color: white;
  opacity: 0.7;
  border-color: white;
  width: 43.7rem;
  height: 3.125rem;
  padding:0.625rem;
  z-index: 1;
 
`;

export const BodyInput = styled.textarea`
  position:relative;
  background-color: white;
  opacity: 0.7;
  border-color: white;
  width: 45rem;
  height: 36rem;
  z-index: 1;
  margin-bottom:6rem;
  text-align: left; 
  padding: 0.625rem;
  box-sizing: border-box;
  overflow-y: auto;
  resize: none;
  white-space: pre-wrap; 
`;

export const WarningSection = styled.div`
  z-index: 1;
  position: absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  border-radius: 0.3125rem;
  border-color: black;
  padding: 0.625rem;
  background-color: #FEFFE5;
  height: 21.875rem;
  width: 28.125rem;
  top:10rem;
  @media screen and (min-width: 1700px){
    top:15rem;
  }
`;

export const WarningTitle = styled.div`
  position: relative;
  width:100%;
  text-align:center;
  justify-content:center;
  align-items:center;
  font-size: 1.875rem;
`;

export const WarningMessage = styled.p`
  position: relative;
  text-align: center;
`;

export const WarningButton = styled.button<{ $confirm?: boolean }>`
  position: relative;
  background-color: ${(props) => (props.$confirm ? '#A0FF88' : '#FF5959')};
  width: 5.3125rem;
  height: 2.1875rem;
  border-radius: 0.3125rem;
  border-color: #FEFFE5;
  margin: 0rem 2rem;
  font-size: 0.9375rem;
  font-family: HANAMDAUM;
`;

export const BottomButton = styled.button`
  position: absolute;
  background-color: #FFFAD9;
  display;flex;
  width: 10rem;
  height: 3.75rem;
  right: 10rem;
  bottom:7rem;
  border: none;
  font-size: 1.875rem;
  font-family: HANAMDAUM;
  @media screen and (min-width: 1700px){
    right: 15rem;
    bottom:11rem;
  }
`;

export const Bug = styled(Image)`
    position: absolute;
    width: 60rem;
    height:auto;
    padding-bottom:8rem;
    
`;