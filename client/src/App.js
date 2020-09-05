import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/Home';
import Signin from './components/signin';
import Signup from './components/signup';
import About from './components/About';
import Signout from './components/signout';

export default () => {
    return(
        <div>
            <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/about" component={About}/>
                <Route path="/signout" component={Signout}/>
            </Switch>
            </Router>
        </div>
    );
};