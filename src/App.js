import Login from './componentes/Login';
<<<<<<< HEAD
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

=======
import Register from './componentes/Register';

function App() {
  return (
    
    <Register />
>>>>>>> 82697222d8b31d7c188c1d66c72fb80b267f887a
  );
}

export default App;
