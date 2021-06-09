import React from 'react';
import articles from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticleListPage = () => (
  <>
    <h1>List of articles in our archive</h1>
    <ArticlesList articles={articles}/>
  </>
)

export default ArticleListPage;