import { Routes, Route } from 'react-router-dom'; 
import HomeLayout from './Components/HomeLayout/HomeLayout';
import HomeImage from './Components/HomeImage/HomeImage';
import MoviesLayout from './Components/MoviesLayout/MoviesLayout';
import MovieDetails from './Components/Movies/MovieDetails';
// http://localhost:5173/

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomeImage />} /> 
      </Route>
      <Route path="/Movies" element={<MoviesLayout />} />
      </Routes>
  );
}

export default App;
