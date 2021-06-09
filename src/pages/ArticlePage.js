import React, { useState, useEffect} from 'react';
import articles from './article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const articleContents = articles.find(article => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(()=> {
    setArticleInfo({upvotes: Math.ceil(Math.random()*10)})
  }, [name]);

  const otherArticles = articles.filter(article => article.name !== name);

  if(!articleContents) return <h1>No article with the name "{name}" in our archive</h1>;

  return (
    <>
      <h1>{articleContents.title}</h1>
      <p className="upvotes">Total number of upvotes for this post is {articleInfo.upvotes}.</p>
      {articleContents.content.map((paragraph, key) => (
      <p key={key}>{paragraph}</p>
      ))}
      <h2>Other Articles</h2>
      <ArticlesList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;