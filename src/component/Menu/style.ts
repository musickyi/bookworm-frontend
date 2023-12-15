import styled from "styled-components";

export const MenuContainer = styled.div`
    background-color: rgb(76, 51, 39);
    justify-content: flex-start; 
    text-align: center;
    top: 0px;
    display: flex;
    width: 100%; 
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
        padding-bottom:0.5rem;
    }
`;

export const WormStyle = styled.div`
   display:flex;
   margin-left:3rem;
   padding:0px;
`;
export const MenuStyle = styled.button`
    background-color: rgb(76, 51, 39);
    border:0px;
    display:flex;
    align-items:center;
    padding:1rem;
    margin-left: auto;
    &:hover{
        cursor:pointer;
    }
`