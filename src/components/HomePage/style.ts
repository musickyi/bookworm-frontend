import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: rgb(242, 239, 228);
    width: 100%;
    height: 100%;
    display: flex;
    justify-contents: center;
    align-items: center;
    flex-direction: column;
`;

export const BookcaseLocate = styled.div`
    width: 100rem;
    padding: 2rem;
    font-size: 2.7rem;
    justify-contents: flex-start;
`;

export const BookcaseStyle = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;
`;

export const BookLocate = styled.div`
    position: absolute;
    display: flex;
    top:10.7rem;
    flex-wrap: wrap;
    padding-left: 18rem;
    z-index: 1;
`;

export const ImageContainer = styled.div`
    position: relative;
    
`;

export const BookColoumn = styled.button`
    width: 3.8rem;
    height: 9rem;
    padding:0.5rem;
    display:flex;
    background-color: ${(props) => props.color};
    border: 2px solid #ffffff;
    color: #fff;
    align-items: flex-start;
    justify-content: flex-start;
    writing-mode: vertical-lr;
    &:hover{
        cursor:pointer;
        background-color: lightgray;
    }
`;

export const BookRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 3.8rem;
`;
