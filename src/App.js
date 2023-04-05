import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyCarousel from "./components/MyCarousel";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>
      <div id="generi">
        <NavDropdown title="Genres" className="text-light p-2 border border-solid-light rounded ms-3">
          <NavDropdown.Item eventKey="4.1">Fantasy</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Horror</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Historic</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Romance</NavDropdown.Item>
        </NavDropdown>
      </div>
      <MyCarousel nameSaga="Harry Potter" query="harry potter"></MyCarousel>
      <MyCarousel nameSaga="Star Wars" query="star wars"></MyCarousel>
      <MyCarousel nameSaga="Lord of the Rings" query="lord of the rings"></MyCarousel>
      <MyCarousel nameSaga="Back to the future" query="back to the future"></MyCarousel>
      <MyCarousel nameSaga="Super Mario (games)" query="super mario"></MyCarousel>

      <MyFooter></MyFooter>
    </>
  );
}

export default App;
