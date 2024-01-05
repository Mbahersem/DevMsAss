import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login, { action as loginAction } from './routes/login';
import Update, { action as updateAction } from './routes/update';
import SignUp, {action as signUpAction} from './routes/signup';
import Dashboard, { loader as userLoader } from './routes/dashboard';
import ErrorPage from './error-page';
import CreateMutual, {action as createMutualAction} from './routes/createMutual';
import Mutuals from './routes/mutuals';
import Mutual from './routes/mutual';

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
    path:"/home/:email?",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    loader: userLoader
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
    action: signUpAction
  },
  {
    path: "/mutuals/create",
    element: <CreateMutual />,
    errorElement: <ErrorPage />,
    action: createMutualAction
  },
  {
    path: "/mutuals",
    element: <Mutuals />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mutuals/:name",
    element: <Mutual />,
    errorElement: <ErrorPage />,
  }

]);

function App() {

  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
