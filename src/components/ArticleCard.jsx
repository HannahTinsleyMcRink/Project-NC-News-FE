import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArticleCard (props) {
    const {article} = props
    return (
        <Card style={{ width: '18rem', margin: '10px'}}>
          <Card.Img variant="top" src={article.article_img_url} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.body}</Card.Text>
            <Button variant="primary">Read article</Button>
          </Card.Body>
        </Card>
      );
}