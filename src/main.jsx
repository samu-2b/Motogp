import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Concorrenti from './component/Concorrenti.jsx';
import Scuderie from './component/Scuderie.jsx';
import ZoomConcorrenti from './component/ZoomConcorrenti.jsx';
import ZoomScuderie from './component/ZoomScuderie.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/concorrenti",
    element: <Concorrenti />,
  },
  {
    path: "/scuderie",
    element: <Scuderie />,
  },
  {
    path: "/zoomconcorrenti",
    element: <ZoomConcorrenti />,
  },
  {
    path: "/zoomscuderie",
    element: <ZoomScuderie />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
