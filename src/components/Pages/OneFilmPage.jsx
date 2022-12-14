import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import {
  MainContent,
  Overview,
  GenresWrapper,
  GenresText,
  Genres
} from 'components/StyledComponent/OneFilmPage.styled';

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
      <Link to={backLinkHref}>GoBack</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${filmArray.poster_path}`}
          alt="poster of the film"
        />
        <h2>{filmArray.original_title}</h2>
        <Overview> Overview: {filmArray.overview}</Overview>

        <GenresWrapper>
          <GenresText>Genres:</GenresText>
          {filmArray.genres !== undefined
            ? filmArray.genres.map(oneGenre => {
                return <Genres key={oneGenre.id}>{oneGenre.name}</Genres>;
              })
            : 'false'}
        </GenresWrapper>

        <p>Average rating: {filmArray.vote_average}</p>
      </div>
      <ul>
        <li>
          <Link to="actor">Actors</Link>
        </li>
        <li>
          <Link to="rewiev">Rewievs</Link>
        </li>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainContent>
  );
};

export default OneFilmPage;
