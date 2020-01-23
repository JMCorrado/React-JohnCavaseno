import React from 'react';
import { render } from 'react-dom';
import LandingPage from './LandingPage';
import './style.scss';

render(
  <LandingPage />,
  document.getElementById('main-app-container')
);

export default () => {
  render(
    <LandingPage />,
    document.getElementById('main-app-container')
  );
}