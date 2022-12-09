import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const OneFilmPage = () => {
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);
  const { id } = useParams();

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
        console.log(error);
      });
  }, [id]);


  return (
    <main>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${filmArray.poster_path}`} alt='poster of the film'/>
        <h2>{filmArray.original_title}</h2>
        <p>Overview: {filmArray.overview}</p>
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
      <Outlet />
    </main>
  );
};
