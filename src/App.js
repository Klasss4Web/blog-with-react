// import logo from '/logo';
// import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import ContactPage from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';
import NavBar from './NavBar';
import  './components/App.css';


const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articles" component={ArticleListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
