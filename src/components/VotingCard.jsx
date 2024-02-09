import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getArticle, patchVotes } from "../utils/api";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/esm/Container";

export default function CastVotes() {
  const [votes, setVotes] = useState();
  const [article, setArticle] = useState({});

  const { article_id } = useParams();
  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setVotes(article.votes);
    });
  }, []);

  function handleClickDown(event) {
    updateVotes(-1);
  }

  function handleClickUp(event) {
    updateVotes(1);
  }

  function updateVotes(num) {
    setVotes((votes) => {
      return votes + num;
    });
    patchVotes(article.article_id, num).catch((newVote) => {
      setVotes((votes) => {
        return votes - num;
      });
    });
  }

  return (
    <Container>
      <p>Votes: {votes}</p>
      <ButtonGroup className="votingButtons">
        <Button onClick={handleClickDown} variant="primary">
          Vote Down!
        </Button>
        <Button onClick={handleClickUp} variant="primary">
          Vote Up!
        </Button>
      </ButtonGroup>
    </Container>
  );
}
