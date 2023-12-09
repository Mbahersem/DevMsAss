import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from './routes/root';
import Login, { action as loginAction } from './routes/login';
import Update, { action as updateAction } from './routes/update';
import SignUp, {action as signUpAction} from './routes/signup';
import Dashboard from './routes/dashboard';
import ErrorPage from './error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction
  },
  {
    path: "/update/:email",
    element: <Update />,
    errorElement: <ErrorPage />,
    action: updateAction
  },
  {
    path:"/home",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
    action: signUpAction
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
