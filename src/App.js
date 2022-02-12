import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/index';
import Login from './pages/login';
import Registration from './pages/registration';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/"  >
              <Home />
            </Route>
            <Route exact path="/login"  >
              <Login />
            </Route>
            <Route exact path="/registration"  >
              <Registration />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
