import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import {
  MainContent,
  Overview,
  GenresWrapper,
  GenresText,
  Genres,
  FilmImg,
  FilTitle,
  AverageRating,
  LiWrapper,
  StyledLink,
  StyledFilmLink,
} from 'components/StyledComponent/OneFilmPage.styled';

const OneFilmPage = () => {
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const standartPicture =
    'https://img.freepik.com/premium-vector/big-problem-businesswomen-sits-on-the-question-mark-sign_70921-125.jpg';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(data => {
        setFilmArray(data);
      })
      .catch(error => {
        console.log(`error: ${error}`);
      });
  }, [id]);

  const backLinkHref = location?.state?.from ?? '/';

  return (
    <MainContent>
      <StyledLink to={backLinkHref}>GoBack</StyledLink>
      <div>
        <FilmImg
          src={
            filmArray.poster_path
              ? `https://image.tmdb.org/t/p/w500${filmArray.poster_path}`
              : standartPicture
          }
          alt="poster of the film"
        />
        <FilTitle>{filmArray.original_title}</FilTitle>
        <Overview> Overview: {filmArray.overview}</Overview>

        <GenresWrapper>
          <GenresText>Genres:</GenresText>
          {filmArray.genres !== undefined
            ? filmArray.genres.map(oneGenre => {
                return <Genres key={oneGenre.id}>{oneGenre.name}</Genres>;
              })
            : 'false'}
        </GenresWrapper>

        <AverageRating>
          Average rating: {filmArray.vote_average?.toFixed(2)}
        </AverageRating>
      </div>
      <LiWrapper>
        <li>
          <StyledFilmLink to="actor" state={{ from: backLinkHref }}>
            Movie Team
          </StyledFilmLink>
        </li>
        <li>
          <StyledFilmLink to="rewiev" state={{ from: backLinkHref }}>
            Rewievs
          </StyledFilmLink>
        </li>
      </LiWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainContent>
  );
};

export default OneFilmPage;
