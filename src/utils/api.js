import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://hannahtm-nc-news-backend-project.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error, "<--- error in API");
      return error
    });
};

export const getArticle = (article_id) => {
  return axios
    .get(`https://hannahtm-nc-news-backend-project.onrender.com/api/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      console.log(error, "<--- error in API");
      return error
    });
};

export const getComments = (article_id) => {
  return axios
    .get(`https://hannahtm-nc-news-backend-project.onrender.com/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      console.log(error, "<--- error in API");
      return error
    });
};

export const patchVotes = (article_id, num) => {
  return axios
    .patch(`https://hannahtm-nc-news-backend-project.onrender.com/api/articles/${article_id}`, {"inc_votes": num})
    .then((response) => {
      console.log(response, "<--- response in API")
      return response.data.article;
    })
    .catch((error) => {
      console.log(error, "<--- error in API");
      return error
    });
};