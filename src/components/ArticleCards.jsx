import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { getArticles } from "../utils/api";

export default function ArticleCards(props) {
  const { article, setArticles } = props;

  function handleClick(event) {
    getArticles().then(() => {});
  }

  return (
    <Card style={{ margin: "10px" }}>
      <Card.Img variant="top" src={article.article_img_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.body}</Card.Text>
        <Link to={`/articles/${article.article_id}`}>
          <Button onClick={handleClick} variant="primary">
            Read article
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
