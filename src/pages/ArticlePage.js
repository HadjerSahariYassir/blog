import React from 'react'
import { useParams } from 'react-router-dom';
import { articles } from 'article-content';

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find()
  return (
    <h1>This is ArticlePage!  {articleId} </h1>
  )
} 

export default ArticlePage

