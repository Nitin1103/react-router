import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';

const basename = '/react-router/'; // replace 'react-router' with your actual repo name

const myrouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:id",
        element: <User />
      },
      {
        path: 'github',
        element: <Github />
      },
      {
        path: '*',
        element: <div>404 Page Not Found</div>
      }
    ]
  }
], { basename });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myrouter} />
  </React.StrictMode>,
);
