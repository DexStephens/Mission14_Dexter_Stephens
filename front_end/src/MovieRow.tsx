import { Movie } from './types/movies';

type RowProps = {
  key: number;
  movie: Movie;
};

const MovieRow = (props: RowProps) => {
  return (
    <tr key={props.key}>
      <td>{props.movie.title}</td>
      <td>{props.movie.year}</td>
      <td>{props.movie.director}</td>
      <td>{props.movie.category}</td>
      <td>{props.movie.edited}</td>
      <td>{props.movie.lentTo}</td>
      <td>{props.movie.notes}</td>
    </tr>
  );
};

export default MovieRow;
