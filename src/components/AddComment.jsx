import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const AddComment = (props) => {
  const param = useParams();
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: param.movieID,
  });

  useEffect(() => {
    console.log("ComponentDidMount (useEffect)");
    setComment({ ...comment, elementId: param.movieID });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("ComponentDidUpdate (useEffect)");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjdkZmY4MWI0MjAwMTM5YjI3ZGEiLCJpYXQiOjE2ODA1MjcwNTcsImV4cCI6MTY4MTczNjY1N30.GXPO_eeIdOsMiwLuZKvIS_1acx3Owkk3KPD52wjwGr4",
        },
      });
      if (response.ok) {
        alert("Comment was sent!");
        setComment({
          comment: "",
          rate: 1,
          elementId: param.movieID,
        });
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="my-3">
      <Form onSubmit={sendComment}>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) => setComment({ ...comment, rate: e.target.value })}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Comment text</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add comment here"
            value={comment.comment}
            onChange={(e) => setComment({ ...comment, comment: e.target.value })}
            required
          />
        </Form.Group>

        <Button variant="danger" type="submit" className="mt-2">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default AddComment;
