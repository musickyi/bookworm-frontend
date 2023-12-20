import styled from '@emotion/styled';

export const HomeContainer = styled.div`
position: fixed;
z-index: -2;
width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 2rem;
  background-color: rgb(242, 239, 228);  
`;

export const BookcaseLocate = styled.div`
width: 100%;
@media screen and (min-width: 1500px){
  max-width: 108rem;
  padding: 1.3rem;
  font-size: 2.2rem;
  justify-content: flex-start;
  span{
    padding-left:3rem;
  }
}
  @media screen and (min-width: 1700px){
    width: 108rem;
    padding: 1rem;
    font-size: 2.7rem;
    justify-content: flex-start;
  }
`;

export const BookcaseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookLocate = styled.div`
position: absolute;
display: flex;
flex-wrap: wrap;
left: 50%; 
transform: translateX(-50%); 
justify-content: space-evenly; 
width: 90%; 
max-width: 108rem;
z-index: 1;
@media screen and (min-width: 1500px){
  top: 9.8rem;
}
  @media screen and (min-width: 1700px){
    top:12.1rem;
  }
`;

export const ImageContainer = styled.div`
position: relative;
width: 100%;
img {
    position: relative;
    width: 100%;
    object-fit: contain;
    height: auto;
    z-index: -1; 
}
@media screen and (min-width: 1500px){
  max-width: 82rem;
}
  @media screen and (min-width: 1700px){
    max-width:94rem;
  }
`;

export const BookColoumn = styled.button`
position: relative;
padding: 0.5rem;
display: flex;
border: 2px solid #ffffff;
z-index: 2; 
color: #fff;
align-items: flex-start;
justify-content: flex-start;
background-color: ${(props) => props.color};
writing-mode: vertical-lr;
&:hover {
    cursor: pointer;
    background-color: lightgray;
}
@media screen and (min-width: 1500px){
  width: 3.3rem;
  height: 8rem;

}
  @media screen and (min-width: 1700px){
    width: 3.8rem;
    height: 9rem;
  }
`;

export const BookRow = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 1500px){
    margin-bottom: 2.9rem;
  }
  @media screen and (min-width: 1700px){
    margin-bottom: 3.5rem;
  }
`;

export const BookWriteButton = styled.button`
  position: absolute;
  font-family: 'HANAMDAUM';
  font-size: 2rem;
  border: none;
  background-color: #fffad9;
  bottom: 8rem;
  right: 3rem;
  width: 10rem;
  height: 4rem;
  a {
    color: black;
    text-decoration: none;
  }
`;


export const BookModalStyle = styled.div`
    position:relaive;
    display:flex;
    flex-direction:column;
    background-color:#FEFFEE;
    border:none;
    width:100%;
    max-height: 100vh;
    align-items:space-between;
    justify-content:space-between;
    text-align:center;
    overflow-y: auto;
    h2{
        font-size:3rem;
        
    }
    span{
        font-size:1.3rem;
        padding:1rem;
    }
    div{
        position:relative;
        width:100%;
    }

    
`
export const BookMoadalContent = styled.div`
position: relative;
    display: flex;
    width: 100%;
    text-align: start;
    
    p {
        position: relative;
        display: flex;
        width: 100%;
        padding: 1rem;
        flex-wrap: wrap; 
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 1rem;
        white-space: normal;
        word-break: break-word; 
        max-width: 100rem; 
    }
`
export const BookMoadalAuthor = styled.div`
position:relative;
display:flex;
width:80%;
justify-content:flex-end;
p{
    justify-content:flex-start;
    align-items:flex-start;
    font-size:1rem;
    

}
`
export const ModalButtonLocate = styled.div`
    position:relative;
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    overflow-y: none;
    button{
        background-color:transparent;
        padding:1rem;
        border:none;
    }
`

export const ReportModalStyle = styled.div`
    position:relative;
    text-align:cetner;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:100%;
    background-color:#FEFFEE;
    border:none;
    
    p{
        position:reltive;
        height:0.2rem;
        font-size:1rem;
        text-align:center;
        padding:1rem;
    }
    li{
        position:reltive;
        padding:0.7rem;
        font-size:2rem;
    }
   
`

export const ReportWarning = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    h2{
        position:relative;
        display:flex;
        padding-top:1.5rem;
        font-size:3rem;
        font-family:none;
    }
`
export const ReportButtonStyle = styled.button`
    padding: 1rem;
    width:10rem;
    height:3rem;
    margin: 2rem;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
    background-color: ${(props) => props.color};
    &:hover {
        cursor: pointer;
    }
`;