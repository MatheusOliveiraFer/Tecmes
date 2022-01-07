import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import  { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
