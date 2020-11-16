import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Component } from 'react';
import Denomination from './components/Denomination'
import './App.css';

class App extends Component{

  render(){
    return(
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link exact to="/">Home</Link>
              </li>
              <li>
                <Link exact to="/denomination">Dénomination</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Hello</h1>
              <p>Cliquer sur dénominaition </p>
            </Route>
            <Route exact path="/denomination" component={({location}) => <Denomination location={location} />}/>
            <Route path='*'>page 404</Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
