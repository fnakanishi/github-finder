import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar  from './components/layout/Navbar';
import Alert  from './components/layout/Alert';
import User  from './components/users/User';
import Home  from './components/pages/Home';
import About  from './components/pages/About';
import NotFound  from './components/pages/NotFound';
import './App.css';

import GithubState from './components/context/github/GithubState';
import AlertState from './components/context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <Navbar title='GitHub Finder' icon='fab fa-github' />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={ Home } />
                <Route exact path='/user/:login' component={ User } />
                <Route exact path='/about' component={ About } />
                <Route component={ NotFound } />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;