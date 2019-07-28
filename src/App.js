import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import './scss/styles.scss'
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    // <Switch>
    //   <Route exact path='/' component={Home}/>
    // </Switch>
    <div>
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
