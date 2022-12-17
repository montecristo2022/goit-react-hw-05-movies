import styled, { keyframes } from 'styled-components';

export const MainContent = styled.main`
  text-align: center;
  margin-bottom: 30px;
`;


export const SearchWrapper = styled.form`
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
  height: 750px;
`;

export const FilmTitle = styled.h2`
  margin-top: 10px;
  color: black;
`;

export const FilmRating = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  color: black;
`;

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
`;

export const UserMistakeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
