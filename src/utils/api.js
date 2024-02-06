import axios from "axios";

export const getArticles = () => {
  return axios
    .get("https://hannahtm-nc-news-backend-project.onrender.com/api/articles")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error, "ERROR");
    });
};
