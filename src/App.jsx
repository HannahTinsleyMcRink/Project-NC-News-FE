import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles"
import Article from "./pages/Article";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import { getArticles } from "./utils/api";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError]= useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    setError(null)
    getArticles()
    .then((articles)=>{
      setArticles(articles)
      setIsLoading(false)
    })
    .catch((error) => {
      setError("Error fetching data")
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <p>Loading...</p>}
  if (error) {
    return <p>{error}</p>
  }

  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles articles = {articles} setArticles = {setArticles} />} />
        <Route path="/articles/:article_id" element={<Article/>} />
      </Routes>
    </>
  );
}

export default App;
