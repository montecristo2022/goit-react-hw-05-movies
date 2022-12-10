import { useEffect, useState } from 'react';

 const Home = () => {
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);

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
              <div key={film.id}>
                   <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt=""
                />
                <p>{film.vote_average}</p>
             
              </div>
            );
          })
        : null}

    </main>
  );
};


export default Home