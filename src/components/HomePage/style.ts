import styled from '@emotion/styled';

export const HomeContainer = styled.div`
    position:fixed;
    top:5rem;
    background-color: rgb(242, 239, 228);
    z-index:-2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-contents: center;
    align-items: center;
    flex-direction: column;
`;

export const BookcaseLocate = styled.div`
    width: 108rem;
    padding: 1rem;
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
    top:8.7rem;
    flex-wrap: wrap;
    padding-left: 18rem;
    z-index: 1;
`;

export const ImageContainer = styled.div`
    position: relative;
    img{
        width:93.8rem;
        height:auto;
    }
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
    margin-bottom: 3.3rem;
`;

export const BookWriteButton = styled.button`
    position:absolute;
    font-family: 'HANAMDAUM';
    font-size:2rem;
    border:none;
    background-color:#FFFAD9;
    bottom:8rem;
    right:3rem;
    width:10rem;
    height:4rem;
    a{
        color:black;
        text-decoration:none;
    }
`
export const ModalStyle = styled.div`
    position:absolute;
    background-color:#FEFFEE;
    border:none;
    width:20rem;
    height:70rem;
`