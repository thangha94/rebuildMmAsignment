import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './components/Nav/Nav'
import HomeRoute from './routes/HomeRoute';
const App = () => {
    return (
        <Router>
            <NavMenu />
            <HomeRoute />
        </Router>

    );
};

export default App;