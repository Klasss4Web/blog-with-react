import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => 
      <Link className="article-list-linkstyle" key = {key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <p>{article.content[0].substr(0, 250)}...<span>Read More</span></p>
      </Link>
      )}
  </>
)

export default ArticlesList;