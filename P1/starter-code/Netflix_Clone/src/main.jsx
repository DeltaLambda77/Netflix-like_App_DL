import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Bookmarked from './pages/Bookmarked.jsx';
import TVSeries from './pages/TVSeries.jsx'
import ErrorPage from './ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Bookmarked_Movies",
        element: <Bookmarked />,
      },
      {
        path: "/Movies",
        element: <Movies />,
      },
      {
        path: "/TV_Series",
        element: <TVSeries />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
