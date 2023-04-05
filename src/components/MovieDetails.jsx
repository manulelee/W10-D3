import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Container, Spinner } from "react-bootstrap";
import AddComment from "./AddComment";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [movieComments, setMovieComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const param = useParams();

  const getMovie = async () => {
    try {
      let response = await fetch(`https://www.omdbapi.com/?i=${param.movieID}&apikey=810aa10a`);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
      } else {
        console.log("Errore nella ricezione dei dati");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const getMovieComments = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${param.movieID}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjdkZmY4MWI0MjAwMTM5YjI3ZGEiLCJpYXQiOjE2ODA1MjcwNTcsImV4cCI6MTY4MTczNjY1N30.GXPO_eeIdOsMiwLuZKvIS_1acx3Owkk3KPD52wjwGr4",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log("comments", data);
        setMovieComments(data);
        setIsLoading(false);
      } else {
        console.log("Errore nella ricezione dei dati");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const deleteComment = async (commentID) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentID}`, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjdkZmY4MWI0MjAwMTM5YjI3ZGEiLCJpYXQiOjE2ODA1MjcwNTcsImV4cCI6MTY4MTczNjY1N30.GXPO_eeIdOsMiwLuZKvIS_1acx3Owkk3KPD52wjwGr4",
        },
      });
      if (response.ok) {
        alert("Commento eliminato");
      } else {
        return new Error("Errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
    getMovieComments();
    console.log("ComponentDidMount (useEffect)");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return movie ? (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img variant="top" src={movie.Poster} className="w-75 my-5 mx-auto" />
            <Card.Body>
              <Card.Title>
                {movie.Title} ({movie.Year})
              </Card.Title>
              <Card.Text>
                <i className="my-3">{movie.Plot}</i>
                <br />
                <b>Genre:</b> {movie.Genre}
                <br />
                <b>Languages:</b> {movie.Language}
                <br />
                <b>Runtime:</b> {movie.Runtime}
                <br />
                <b>Actors:</b> {movie.Actors}
                <br />
                <b>Awards:</b> {movie.Awards}
                <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {movieComments.length !== 0 ? (
          <Col xs={12} md={6} className="text-light mt-5">
            <h5 className="mt-5">Comments:</h5>
            <AddComment></AddComment>
            {movieComments.map((c) => {
              return (
                <div key={c._id}>
                  <b>Author:</b> {c.author} <br />
                  <b>Rate:</b> {c.rate}
                  <br />
                  {c.comment}
                  <br />
                  {c.dateTime}
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteComment(c._id);
                      getMovieComments();
                    }}
                  >
                    Delete
                  </Button>
                </div>
              );
            })}
          </Col>
        ) : (
          <Col xs={12} md={6} className="text-light mt-5">
            <h4>No comments for this title...</h4>
            <AddComment getComments={getMovieComments}></AddComment>
          </Col>
        )}
      </Row>
    </Container>
  ) : isLoading ? (
    <Spinner animation="border" variant="danger" className="ms-5" />
  ) : (
    <NotFound></NotFound>
  );
}

export default MovieDetails;
