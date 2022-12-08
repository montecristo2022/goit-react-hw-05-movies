// import { Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// export const Home = () => {
//   const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
//   const [filmArray, setFilmArray] = useState([]);
//   // `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`

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
//     <main>
//       {filmArray.length > 0
//         ? filmArray.map(film => {
//             return (
//               <div key={film.id}>
//                 <p>{film.id}</p>
//                 <p>{film.overview}</p>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
//                   alt=""
//                 />
//               </div>
//             );
//           })
//         : null}

//       <Outlet />
//     </main>
//   );
// };
