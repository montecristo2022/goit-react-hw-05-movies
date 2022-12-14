import styled, { keyframes } from 'styled-components';

export const MainContent = styled.main``;



export const FilmInfoWrapper = styled.div`
text-align: center;
margin-bottom: 30px;
`;

export const FilmTextWrapper = styled.div`
margin-top: 10px;
`;



export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;



export const Input = styled.input`
  padding-top: 6px;
  padding-bottom: 6px;
`;
export const Button = styled.button`
  cursor: pointer;
  border: 1px black solid;
`;

export const Image = styled.img`
width: 550px;
height: 770px;
`




const fade = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const UserMistakeText = styled.h2`
animation: ${fade} 3s linear infinite alternate;
animation-iteration-count: 1;
`

export const UserMistakeWrapper = styled.div`
  display: flex;
  justify-content: center;
 
`;


