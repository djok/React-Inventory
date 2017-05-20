import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage'

const routes = [
    {
        path: '/',
        exact: true,
        component: MainPage
    }
];

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    {routes.map((route, index) => (
                        <Route key={index} {...route} />
                    ))}
                </div>
            </Router>
        );
    }
}

export default Routes;
