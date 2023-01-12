import { useEffect, useState } from 'react';
import { Footer } from 'components/Footer';
import { Link } from 'react-router-dom';
import {
  Main,
  FilmTitle,
  FilmRating,
} from 'components/StyledComponent/Home.styled';

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
  <>
    <Main>
      {filmArray.length > 0
        ? filmArray.map(film => {
            return (
              <Link to={`movies/${film.id}`} key={film.id}>
                <img
                  src={
                    film.poster_path
                      ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                      : standartPicture
                  }
                  alt=""
                />
                <FilmTitle>{film.original_title}</FilmTitle>
                <FilmRating>Average rating: {film.vote_average}</FilmRating>
              </Link>
            );
          })
        : null}
    </Main>

    <Footer/>
  </>
  );
};

export default Home;

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Main, FilmTitle, FilmRating } from 'components/StyledComponent/Home.styled';

// const Home = () => {
//   const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
//   const [filmArray, setFilmArray] = useState([]);
//   const standartPicture =
//     'https://png.vector.me/files/images/1/1/110358/inverted_question_mark_alternate_clip_art.jpg';

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }

//         return response.json();
//       })
//       .then(data => {
//         setFilmArray(data.results);
//       });
//   }, []);

//   return (
//     <Main>
//       {filmArray.length > 0
//         ? filmArray.map(film => {
//             return (
//               <Link to={`movies/${film.id}`} key={film.id}>
//                 <img
//             src={
//               film.poster_path
//                 ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
//                 : standartPicture
//             }
//             alt=""
//                 />
//               <FilmTitle>{film.original_title}</FilmTitle>
//                 <FilmRating>Average rating: {film.vote_average}</FilmRating>
//               </Link>
//             );
//           })
//         : null}
//     </Main>
//   );
// };

// export default Home;
