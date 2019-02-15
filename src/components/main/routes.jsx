import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CharactersFeed from '../characters/charactersFeed';
import About from '../about';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={About} />
            <Route path='/feed' component={CharactersFeed} />
        </Switch>
    </Router>
);

export default Routes;

