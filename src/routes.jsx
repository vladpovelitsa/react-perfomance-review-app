import App from './App.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import HomePage from './routes/HomePage.jsx';
import DevelopersPage from './routes/DevelopersPage.jsx';
import SingleDeveloperPage from './routes/SingleDeveloperPage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import UsersPage from './routes/UsersPage.jsx';
import RegistrationUserPage from './routes/RegistrationUserPage.jsx';

let routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/devs',
        element: <DevelopersPage />,
      },
      {
        path: '/devs/:id',
        element: <SingleDeveloperPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/reg',
        element: <RegistrationUserPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];
export default routes;
