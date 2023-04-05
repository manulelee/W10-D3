import { Component } from "react";
import Col from "react-bootstrap/Col";

class SingleMovie extends Component {
  render() {
    return (
      <Col>
        <img className="img-fluid poster" src={this.props.poster} alt="movie poster" />
      </Col>
    );
  }
}

export default SingleMovie;
