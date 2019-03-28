import React from 'react';
import { Route } from 'react-router';
import HomePage from './pages/HomePage';
import ContestDetailsPage from './pages/ContestDetailsPage';
import Header from './components/Header';
import AllContestPage from './pages/AllContestPage';

const Routes = () => (
    <React.Fragment>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contest" component={AllContestPage} />
        <Route exact path="/contest/challenges/:name" component={ContestDetailsPage} />
    </React.Fragment>
);

export default Routes;