import ArticleCards from "../components/ArticleCards";

import Container from "react-bootstrap/Container";

export default function AllArticles(props) {
  const { articles, setArticles } = props;
  return (
    <Container>
      <h2>All Articles</h2>
      <>
        {articles.map((article) => {
          return <ArticleCards key={article.article_id} article={article} />;
        })}
      </>
    </Container>
  );
}
