import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getArticle } from '../utils/api';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function Article () {
    const [article, setArticle] = useState({});

    const {article_id} = useParams()
    useEffect(() => {
        getArticle(article_id)
        .then((article) => {
            setArticle(article)
        })
    }, [])

    return (
        <Container>
        <Image src={article.article_img_url} rounded fluid ></Image>
        <h3>{article.title}</h3>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        </Container>
    )
}