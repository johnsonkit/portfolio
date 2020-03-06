import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app--container">
          
          <Header />

          <div className="main">
            <Switch>
              <Route path="/" exact component={Home}/>
              {/* <Route path="/home" component={Home}/> */}
              <Route path="/about" exact component={About}/> 
              <Route path="/work" exact component={Work}/>
              <Route path="/contact" exact component={Contact}/>
            </Switch>
          </div>

          <div className="footer">

          </div>

        </div>
      </div>

    </Router>
  );
}

export default App;
