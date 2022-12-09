import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Actor = () => {
  const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
  const [filmArray, setFilmArray] = useState([]);
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(data => {
        setFilmArray(data.crew);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);


  return (
    <section>
      <h2>Our Actors</h2>

      {filmArray.length > 0
        ? filmArray.map(oneActor => {
            return (
              <p key={oneActor.credit_id}>
                Name: {oneActor.name} Job in our team: {oneActor.job}
              </p>
            );
          })
        : 'unfortunately we dont know the cast'}
    </section>
  );
};
