import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  CreateBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from './routes/root';
import Login, {action as loginAction } from './routes/login';
import Update from './routes/update'
import ErrorPage from './error-page';


const router = CreateBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction
  },
  {
    path: "/update/:email",
    element: <Update />,
    errorElement: <ErrorPage />,
    action: loginAction
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
