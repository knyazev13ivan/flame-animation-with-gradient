import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './ForLearn';
import './styles/styles.scss';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
)