import ArticleCard from '../components/ArticleCard';

import Container from 'react-bootstrap/Container';

export default function Articles(props) {
  const {articles, setArticles} = props
  return (  
  <Container>
    <h2>All Articles</h2>
        <ul>{articles.map((article)=>{
      return <ArticleCard key = {article.article_id} article = {article}/>
    })}
      </ul>
  </Container>)
}
