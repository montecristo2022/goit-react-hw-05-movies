import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

  const OneFilmPage = () => {
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
        console.log(`error: ${error}`);
      });
  }, [id]);

  function log() {
    console.log(filmArray);
    console.log(filmArray.genres.length);
  }

  return (
    <main>
      <button onClick={log}>Консоль</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${filmArray.poster_path}`}
          alt="poster of the film"
        />
        <h2>{filmArray.original_title}</h2>
        <p>Overview: {filmArray.overview}</p>

        {filmArray.genres !== undefined
          ? filmArray.genres.map(oneGenre => {
              return <p key={oneGenre.id}>{oneGenre.name}</p>;
            })
          : 'false'}

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


export default OneFilmPage