import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './component/Home/Home'
import About from './component/About/About'

function App() {
  return (
    <>
      <Router>
        <h1>Router page</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='about'>About</Link>
            </li>
            
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
