import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import reportWebVitals from './reportWebVitals';
import 'react-tooltip/dist/react-tooltip.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import routes from './Components/Routes/routes';

const router = createBrowserRouter(routes);

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();