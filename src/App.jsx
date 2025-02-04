import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout/HomeLayout";
import MoviesLayout from "./Components/MoviesLayout/MoviesLayout";
import MoviesComponents from "./Components/Movies/MoviesComponents";
import SelectedCategory from "./Components/Movies/SelectedCategory";
import MovieDetails from "./Components/Movies/MovieDetails"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />

      {/* Movies Page */}
      <Route path="/Movies" element={<MoviesLayout />} >
        <Route index="All" element={<MoviesComponents />} />
        <Route path="category/:categoryId" element={<SelectedCategory />} />
        <Route path=":movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
