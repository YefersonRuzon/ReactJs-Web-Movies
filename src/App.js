import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import './App.css';
import { Search } from './components/Search';
import { NavBar } from './components/NavBar';
import { TopBar } from './components/TopBar';
import { Home } from './pages/Home';
import { MovieInfo } from './pages/MoviesInfo';
import { Footer } from './components/Footer';
import { Movies } from './pages/Movies';
import { Shows } from './pages/Shows';
import { TvInfo } from './pages/TvInfo';
import {More} from './pages/More'
function App() {
  
  return (
    <BrowserRouter>
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Search></Search>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/movies" element={<Movies></Movies>}></Route>
            <Route path="/shows" element={<Shows></Shows>}></Route>
            <Route path="/more" element={<More></More>}></Route>
            <Route path="/movies/:movieId" element={<MovieInfo />}></Route>
            <Route path="/shows/:tvId" element={<TvInfo />}></Route>
            <Route path="/movies/search=" element={<Movies></Movies>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;