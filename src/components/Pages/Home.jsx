import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);
  const standartPicture =
    'https://png.vector.me/files/images/1/1/110358/inverted_question_mark_alternate_clip_art.jpg';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(data => {
        setFilmArray(data.results);
      });
  }, []);

  return (
    <main>
      {filmArray.length > 0
        ? filmArray.map(film => {
            return (
              <Link to={`${film.id}`} key={film.id}>
                <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                : standartPicture
            }
            alt=""
                />
              <h2>{film.original_title}</h2>
                <p>Average rating: {film.vote_average}</p>
              </Link>
            );
          })
        : null}
    </main>
  );
};

export default Home;
