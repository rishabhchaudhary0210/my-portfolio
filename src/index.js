import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectAll from './Components/Project/ProjectAll';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <div>Error Recieved</div>
  },
  {
    path:'/work',
    element: <ProjectAll />,
    errorElement: <div>Error Recieved</div>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

