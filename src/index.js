import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

import './styles/index.css';
import '@mdi/font/css/materialdesignicons.min.css';
import reportWebVitals from './reportWebVitals';
import Home from "./routes/Home";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Pricing from './routes/Pricing';
import ErrorPage from './routes/Error-page';
import Services from './routes/Services';

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage />},
  { path: "/pricing", element: <Pricing /> },
  { path: "/services", element: <Services />, }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <NavBar />
    </header>
    <RouterProvider router={router} />
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>
);

reportWebVitals();
