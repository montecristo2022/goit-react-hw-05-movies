import { Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { SharedLayout } from './SharedLayout';
import { Movies} from './Pages/Movies';
import { Home } from './Pages/Home';
import { OneFilmPage } from './Pages/OneFilmPage';


export const App = () => {
  return (
    <>
      <Routes>
           <Route path="/"  element={ <SharedLayout />}>
           <Route index element={<Home />} />
            <Route path='home' element={<Home/>}/>
          <Route path="movies" element={<Movies />}/>
            <Route path='movies/:id'  element={<OneFilmPage/>}/>
            

        </Route>
      </Routes>
    </>
  );
};





























// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';

// export const App = () => {
//   const API_KEY = 'dfb50cc3b16f950a5a6b0ea437e17f05';
//   const [filmArray, setFilmArray] = useState([]);
//   const [MyBoolean, setMyBoolean] = useState(false);
//   const [querry, setQuerry] = useState('');
//   const [submitData, setSubmitData] = useState('');

//   function handleChange(event) {
//     setQuerry(event.target.value);
//   }

//   function recieveInputData(event) {
//     event.preventDefault();
//     setSubmitData(querry);
//   }

//   function consoleLog() {
//     console.log(filmArray);
//   }

//   useEffect(() => {
//     if (submitData !== '') {
//       console.log(submitData);

//       fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${submitData}&page=1&include_adult=false`
//       )
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(response.status);
//           }

//           return response.json();
//         })
//         .then(data => {
//           setFilmArray(data.results);
//         });
//     }
//   }, [submitData]);

//   return (
//     <div>
//       <input
//         type="text"
//         id="message"
//         name="message"
//         onChange={handleChange}
//         value={querry}
//       />
//       <button type="submit" onClick={recieveInputData}>
//         Поиск фильма
//       </button>
//       <button type='button' onClick={consoleLog}>Показать консоль</button>
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
//     </div>
//   );
// };
