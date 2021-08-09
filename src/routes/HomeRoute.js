import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router';

const About = lazy(() => import('../pages/About/About'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Home = lazy(() => import('../pages/Home/Home'));

import './HomeRoute.scss';

const HomeRoute = () => {



    return (
        <div className="content">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Suspense>
        </div>
    );
};

export default HomeRoute;