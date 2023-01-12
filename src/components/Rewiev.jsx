import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FilmRewievWrapper,
  OneRewiev,
  Text,
} from './StyledComponent/Rewiev.styled';

const Rewiev = () => {
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(data => {
        setFilmArray(data.results);
      })
      .catch(error => {
        console.log(`error: ${error}`);
      });
  }, [id]);

  return (
    <FilmRewievWrapper>
      <h2>Film review</h2>
      {filmArray.length > 0 ? (
        filmArray.map(oneActor => {
          return <OneRewiev key={oneActor.id}>{oneActor.content}</OneRewiev>;
        })
      ) : (
        <Text>unfortunately, we dont have a review</Text>
      )}
    </FilmRewievWrapper>
  );
};

export default Rewiev;
