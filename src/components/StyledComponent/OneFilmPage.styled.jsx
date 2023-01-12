import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const MainContent = styled.main`
text-align: center;

`;

export const StyledLink = styled(Link)`
font-size: 20px;
margin-left -70%;
background-color: grey;
color: white;
padding: 5px 10px 5px 10px;
border-radius: 4px;
`

export const StyledFilmLink = styled(Link)`
font-size: 20px;
`


export const FilmImg = styled.img`
margin-bottom: 20px;
`

export const FilTitle = styled.h2`
margin-bottom: 10px;
`

export const Overview = styled.p`
width: 500px;
margin-left: auto; 
margin-right: auto;
margin-bottom: 20px;
font-size: 20px;
`;

export const GenresWrapper = styled.div `
display: flex;
justify-content: center;
`

export const GenresText = styled.p`
margin-right: 10px;
font-size: 20px;
`

export const Genres = styled.p`
margin-right: 5px;
font-size: 20px;
`

export const AverageRating = styled.p`
margin-bottom: 10px;
font-size: 20px;
`

export const LiWrapper = styled.ul`
margin-bottom: 50px;
`




