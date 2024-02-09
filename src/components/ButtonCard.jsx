import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getArticle } from '../utils/api';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function CastVotes () {

    const [votes, setVotes] = useState([]);
    const [article, setArticle] = useState({});

    const {article_id} = useParams()
    useEffect(() => {
        getArticle(article_id)
        .then((article) => {
            setArticle(article)
        })
    }, [])

    return (
        <ButtonGroup className="votingButtons">
          <Button variant="primary">Vote Down!</Button>
          <Button variant="primary">Vote Up!</Button>
        </ButtonGroup>
      );
}