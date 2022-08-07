import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Page from './components/Page'
import Teaser from './components/Teaser'
import Grid from './components/Grid'
import Feature from './components/Feature'
import Header from './components/Header';
import NavItem from './components/NavItem';
import NavBar from './components/NavBar';


storyblokInit({
  accessToken: "iUYEBUr3MrXeIW2WYATa5Att",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    header: Header,
    nav_item: NavItem,
    nav_bar: NavBar
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
