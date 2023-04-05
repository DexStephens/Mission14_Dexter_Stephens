import { Movie } from './types/movies';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieRow from './MovieRow';

const MovieTable = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get<Movie[]>('https://localhost:4000/movie')
      .then((response) => {
        const movies = response.data;
        setMovies(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Year</th>
          <th scope="col">Director</th>
          <th scope="col">Category</th>
          <th scope="col">Edited</th>
          <th scope="col">Lent To</th>
          <th scope="col">Notes</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
          <MovieRow key={m.movieId} movie={m} />
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
