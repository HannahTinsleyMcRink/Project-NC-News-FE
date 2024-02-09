import { getComments } from "../utils/api";
import Container from "react-bootstrap/esm/Container";

import { useState, useEffect } from "react";

export default function AllComments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

    return (
      <Container className="commentCard">
        <h4>All Comments:</h4>
        <ol>
          {comments.map((comment) => {
          return <li key={comment.comment_id} className="singleComment"> {comment.body} </li>
        })}
        </ol>
      </Container>
    );
  }

