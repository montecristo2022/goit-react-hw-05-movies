import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  MainContent,
  Input,
  Button,
  SearchWrapper,
  UserMistakeWrapper,
  UserMistakeText,
  Image,
  FilmRating,
  FilmTitle
} from 'components/StyledComponent/Movies.styled';

const Movies = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  console.log(searchValue);

  const standartPicture =
    'https://img.freepik.com/premium-vector/big-problem-businesswomen-sits-on-the-question-mark-sign_70921-125.jpg';
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

  useEffect(() => {
    if (submitData !== '') {
      console.log(submitData);

      setSearchParams({ search: submitData });
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
          setFilmArray(data.results);
        });
    }
  }, [setSearchParams, submitData]);

  return (
    <MainContent>
      <SearchWrapper>
        <Input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={querry}
        />
        <Button type="submit" onClick={recieveInputData}>
          Find film
        </Button>
      </SearchWrapper>
      {submitData !== ''
        ? filmArray.map(film => {
            return (
              <Link to={`${film.id}`} key={film.id} state={{ from: location }}>
               
                  <Image
                    src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                        : standartPicture
                    }
                    alt=""
                  />
                  <FilmTitle>Name of movie: {film.original_title}</FilmTitle>
                  <FilmRating>Average rating: {film.vote_average}</FilmRating>
             
              </Link>
            );
          })
        : null}
      {filmArray.length < 1 && MyBoolean === true ? (
        <UserMistakeWrapper>
          <UserMistakeText>
            Film with name {submitData} is not exist.
          </UserMistakeText>
        </UserMistakeWrapper>
      ) : null}
    </MainContent>
  );
};

export default Movies;
