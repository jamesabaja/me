import React, {createRef} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home';
import './scss/styles.scss'
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  let aboutRef = createRef();
  let projectsRef = createRef();

  const goToAbout = event => {
    if(aboutRef) {
      // window.scrollTo({behavior: "smooth", top: aboutRef.current.offsetTop});
      console.log(aboutRef)
    }
  }

  const goToProjects = event => {
    window.scrollTo(0, projectsRef.current.offsetTop);
  }

  return (
    // <Switch>
    //   <Route exact path='/' component={Home}/>
    // </Switch>
    <div>
      <Home scrollMethods={[goToAbout, goToProjects]}/>
      <About ref={aboutRef}/>
      <Projects ref={projectsRef}/>
    </div>
  );
}

export default App;
