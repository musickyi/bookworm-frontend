import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display:flex;
  align-items:space-between;
  justify-content:space-between;
  flex-direction:column;
  width: 100%;
  height: 100vh;
  background-color: #4C3327;
`;

export const BooksImage = styled(Image)`
  position: relative;
  height:100%;
  width: 91.875rem;
  height: auto;
  @media screen and (min-width: 1700px){
    width: 110rem;
  }
`;

export const BugsImage = styled(Image)`
  position: relative;
  width: 83.125rem;
  height: auto;
  @media screen and (min-width: 1700px){
    width: 100rem;
  }
`;

export const HomeButton = styled.button`
  position: absolute;
  width: 16.875rem;
  height: 5rem;
  background-color: #FCFFD6;
  font-family: HANAMDAUM;
  border-radius: 0.9375rem;
  font-size: 1.5625rem;
  z-index:1;
`;

export const NotFoundImage = styled(Image)`
  position: relative;
  width: 34.375rem;
  height: auto;
  @media screen and (min-width: 1700px){
    width: 50rem;
  }
  z-index: 1;
`;

export const Feature404Image = styled(Image)`
  position: absolute;
  height: auto;
  width: 68.75rem;
  @media screen and (min-width: 1700px){
    width: 100rem;
  }
`;

export const TopContainer = styled.div`
    position:relative;
    padding-top:10rem;
    display:flex;
    justify-content:center;
    @media screen and (min-width: 1700px){
        padding-top:8rem;
    }
`
export const BottomContainer = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`