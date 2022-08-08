import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { storyblokInit, apiPlugin } from "@storyblok/react";

import Header from './components/Header';
import NavItem from './components/NavItem';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SocialItem from './components/SocialItem';
import SliderPrincipalPortada from './components/SliderPrincipalPortada';
import Page from './components/Page';
import Noticia from './components/Noticia';
import Destacado from './components/Destacado';

storyblokInit({
  accessToken: "iUYEBUr3MrXeIW2WYATa5Att",
  use: [apiPlugin],
  components: {
    page: Page,
    header: Header,
    nav_item: NavItem,
    nav_bar: NavBar,
    footer: Footer,
    social_item: SocialItem,
    slider_principal_portada: SliderPrincipalPortada,
    noticia: Noticia,
    destacados: Destacado
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
