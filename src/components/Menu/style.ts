import styled, { css, keyframes } from 'styled-components';

export const MenuContainer = styled.div`
    position:fixed;
    background-color: rgb(76, 51, 39);
    justify-content: flex-start;
    text-align: center;
    top: 0px;
    display: flex;
    width: 100%;
    z-index: 0;
`;

export const BookwormLogo = styled.div`
    color: white;
    display: flex;
    font-size: 2.3rem;
    align-items: center;
    flex-direction: column;
    margin-left: 2rem;
    span {
        font-size: 0.6rem;
        padding-bottom: 0.5rem;
    }
`;

export const WormStyle = styled.div`
    display: flex;
    margin-left: 3rem;
    padding: 0px;
`;

export const MenuStyle = styled.button`
    background-color: rgb(76, 51, 39);
    border: 0px;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-left: auto;
    &:hover {
        cursor: pointer;
    }
`;
const slideInRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOutRight = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Sidebar = styled.div<SidebarProps>`
    position: fixed;
    background-color: white;
    height: 93vh;
    width: 35rem;
    overflow-y:auto;
    top: 5rem;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-35rem')};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1;
    display: flex;
    flex-direction: column;
    will-change: right;
    animation: ${({ $isOpen }) =>
        $isOpen
            ? css`
                  ${slideInRight} 0.3s ease-in-out
              `
            : css`
                  ${slideOutRight} 0.3s ease-in-out
              `};
`;


export const ToggleButton = styled.button<ToggleButtonProps>`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  color: black;
  text-align: start;
  font-family: 'HANAMDAUM';
  font-size: 2.3rem;
  padding: 0.5rem;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  z-index: 1;
  svg {
    width: 1.8rem;
    padding: 0 2rem 0 1rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'scaleY(-1)' : 'none')};
    transition: transform 0.3s ease-in-out;
  }
`;

export const BookCaseButton = styled.button<SidebarProps>`
  background-color: transparent;
  border: none;
  width: 100%;
  color: black;
  text-align: start;
  font-family: 'HANAMDAUM';
  font-size: 2.3rem;
  padding: 0.5rem;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  z-index: 1;
  animation: ${fadeIn} 0.3s ease-in-out;

  svg {
    width: 1rem;
    padding: 0 2rem 0 2rem;
    transform: scaleY(${({ $isOpen }) => ($isOpen ? -1 : 1)});
    transition: transform 0.3s ease-in-out;
  }
`

export const MyListStyle = styled.ul`
font-size:2rem;
animation: ${fadeIn} 0.3s ease-in-out;
padding:1rem 0rem 1rem 4rem;
li{
  list-style:none;
  padding:1rem;
}
li::marker {
  content: '●'; 
  font-size: 2rem; 
  color:#906B6B;
  margin: 0rem 0.5rem; 
}
span{
  font-size:2rem;
}
`
export const BookCaseLocateList = styled.ul`
  display:flex;
  flex-direction: column;
  text-align:flex-start;
  padding-left: 7.5rem;
  list-style: none;
  animation: ${fadeIn} 0.3s ease-in-out;

  li::marker {
    content: '●'; 
    font-size: 2rem; 
    color:#906B6B;
    margin-right: 0.5rem; 
  }

  a{
    padding-left:1rem;
    font-size: 2rem;
    color:black;
    text-decoration: none;

  }
`
