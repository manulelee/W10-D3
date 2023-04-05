import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleMovie from "./SingleMovie";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

//ho usato il pacchetto npm react-grid-carousel per gestire il carosello con colonne multiple
class MyCarousel extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  responsive = {
    xl: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    lg: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    md: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    xs: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  getMovies = async () => {
    try {
      let response = await fetch(`https://www.omdbapi.com/?s=${this.props.query}&apikey=810aa10a`);
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      } else {
        console.log("Errore nella ricezione dei dati");
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    console.log("Eseguo la fetch (ComponentDidMount)");
    this.getMovies();
  }

  render() {
    return (
      <>
        <h2 className="text-light mt-2 mb-2 b mx-4">{this.props.nameSaga} saga:</h2>
        <Carousel className="mx-4" responsive={this.responsive} infinite={true}>
          {this.state.isLoading && (
            <div className="text-center">
              <Spinner animation="border" role="status" variant="danger">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              {this.state.isError && <Alert variant="danger">Errore durante il recupero dei titoli</Alert>}
            </div>
          )}
          {this.state.movies.map((movie) => (
            <SingleMovie key={movie.imbdID} poster={movie.Poster} />
          ))}
        </Carousel>
      </>
    );
  }
}

export default MyCarousel;
