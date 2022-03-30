import Login from './componentes/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
function App() {
  return (
      <Router>
        <Switch>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>

      </Router>

  );
}

export default App;
