import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const SingleMovie = (props) => {
  return (
    <Col>
      <Link to={"/movie-details/" + props.movie.imdbID}>
        <img className="img-fluid poster" src={props.movie.Poster} alt="movie poster" />
      </Link>
    </Col>
  );
};

export default SingleMovie;
