import './App.css';
import MainNav from './MainNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Podcasts from './Podcasts';
import MovieCollection from './MovieCollection';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/movies" element={<MovieCollection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
