import Home from './containers/home';
import SignIn from './containers/SignIn';

const routeConfig = {
  home: {
    path: '/',
    exact: false,
    isPrivate: true,
    Component: Home,
  },
  signIn: {
    path: '/signin',
    exact: true,
    isPrivate: false,
    Component: SignIn,
  },
};

export default routeConfig;
