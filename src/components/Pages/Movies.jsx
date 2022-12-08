import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
  const standartPicture =
    'https://png.vector.me/files/images/1/1/110358/inverted_question_mark_alternate_clip_art.jpg';
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);
  const [MyBoolean, setMyBoolean] = useState(false);
  const [querry, setQuerry] = useState('');
  const [submitData, setSubmitData] = useState('');

  function handleChange(event) {
    setQuerry(event.target.value);
  }

  function recieveInputData(event) {
    event.preventDefault();
    setSubmitData(querry);
    setMyBoolean(true);
  }

  function consoleLog() {
    console.log(filmArray);
  }

  function imgClick(id) {
    // console.log(id);
  }

  useEffect(() => {
    if (submitData !== '') {
      console.log(submitData);

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${submitData}&page=1&include_adult=false`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }

          return response.json();
        })
        .then(data => {
          console.log(data);
          setFilmArray(data.results);
        });
    }
  }, [submitData]);

  return (
    <main>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={querry}
      />
      <button type="submit" onClick={recieveInputData}>
        Поиск фильма
      </button>
      <button type="button" onClick={consoleLog}>
        Показать консоль
      </button>
      {submitData !== ''
        ? filmArray.map(film => {
            return (
              <NavLink to="id"  key={film.id}>
                <div>
                  <img
                    onClick={() => imgClick(film.id)}
                    src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                        : standartPicture
                    }
                    alt=""
                  />
                  <p>{film.vote_average}</p>
                  <p>{film.original_title}</p>
                </div>
              </NavLink>
            );
          })
        : null}
      {filmArray.length < 1 && MyBoolean === true ? (
        <h2>
          Фильм с именем {submitData} не существует. Возможно, вы допустили
          опечатку?
        </h2>
      ) : null}
    </main>
  );
};
