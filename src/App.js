import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyCarousel from "./components/MyCarousel";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar></MyNavbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="generi">
                  <NavDropdown title="Genres" className="text-light p-2 border border-solid-light rounded ms-3">
                    <NavDropdown.Item eventKey="4.1">Fantasy</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Horror</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Historic</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4">Romance</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <MyCarousel key="Harry Potter" nameSaga="Harry Potter saga" query="harry potter"></MyCarousel>
                <MyCarousel key="Star Wars saga" nameSaga="Star Wars saga" query="star wars"></MyCarousel>
                <MyCarousel
                  key="Lord of the Rings saga"
                  nameSaga="Lord of the Rings saga"
                  query="lord of the rings"
                ></MyCarousel>
                <MyCarousel
                  key="Back to the future saga"
                  nameSaga="Back to the future saga"
                  query="back to the future"
                ></MyCarousel>
                <MyCarousel key="Super Mario" nameSaga="Super Mario (games)" query="super mario"></MyCarousel>
              </>
            }
          />
          <Route
            path="/tv-shows"
            element={
              <>
                <div id="generi">
                  <NavDropdown title="Genres" className="text-light p-2 border border-solid-light rounded ms-3">
                    <NavDropdown.Item eventKey="4.1">Fantasy</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Horror</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Historic</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4">Romance</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <MyCarousel key="Futurama" nameSaga="Futurama" query="Futurama"></MyCarousel>
                <MyCarousel key="South Park" nameSaga="South Park" query="South Park"></MyCarousel>
                <MyCarousel key="Simpson" nameSaga="Simpson" query="The Simpsons"></MyCarousel>
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <div id="generi">
                  <NavDropdown title="Genres" className="text-light p-2 border border-solid-light rounded ms-3">
                    <NavDropdown.Item eventKey="4.1">Fantasy</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Horror</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Historic</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.4">Romance</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <MyCarousel key="Love" nameSaga="Love movies" query="Love"></MyCarousel>
                <MyCarousel key="Horror" nameSaga="Horror movies" query="Horror"></MyCarousel>
                <MyCarousel key="Italian" nameSaga="Italian movies" query="Italian"></MyCarousel>
              </>
            }
          />
          <Route
            path="/movie-details/:movieID"
            element={
              <>
                <MovieDetails></MovieDetails>
              </>
            }
          ></Route>

          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <MyFooter id="footer"></MyFooter>
      </>
    </BrowserRouter>
  );
}

export default App;
