import './App.css';
import React,{useState} from 'react'
import Home from './pages/home';
import Projects from './pages/projects';
import blog from './pages/blog';
import resume from './pages/resume';
import Nav from './components/Nav';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
function App() {

  return (
    <div className="App">
        <Router>
    <Nav/>
   
    <Switch>
    <Route exact path='/'
      render={()=>{
        return(
          <Redirect to ="/home" />
        )
      }}></Route>
      <Route path='/home' exact component={Home}></Route>
      <Route path='/blog' exact component={blog}></Route>
      <Route path='/projects' exact component={Projects}></Route>
      <Route path='/resume' exact component={resume}></Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
