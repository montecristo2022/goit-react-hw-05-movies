import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
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
} from 'components/StyledComponent/OneFilmPage.styled';
import { render } from '@testing-library/react';

const OneFilmPage = () => {
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);
  const { id } = useParams();
  const location = useLocation();

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
          src={`https://image.tmdb.org/t/p/w500${filmArray.poster_path}`}
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

        <AverageRating>Average rating: {filmArray.vote_average}</AverageRating>
      </div>
      <LiWrapper>
        <li>
          <Link to="actor" state={{ from: backLinkHref }}>
            Actors
          </Link>
        </li>
        <li>
          <Link to="rewiev" state={{ from: backLinkHref }}>
            Rewievs
          </Link>
        </li>
      </LiWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainContent>
  );
};

export default OneFilmPage;
