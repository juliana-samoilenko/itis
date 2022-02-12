import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'pages/index';

import routes from './constants/routes';
import Login from './pages/login';
import Registration from './pages/registration';
import User from './global/user/user';

function App() {
  return (
    <User>
      <Router>
        <Switch>
          <Route exact path={routes.HOME}>
            <Home />
          </Route>
          <Route exact path={routes.LOGIN}>
            <Login />
          </Route>
          <Route exact path={routes.REGISTRATION}>
            <Registration />
          </Route>
        </Switch>
      </Router>
    </User>
  );
}

export default App;
