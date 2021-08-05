import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';

// Dynamic import, this is fundamental of Lazy and suspense in React
// class DynamicImport extends Component {
//     state = {
//         component: null
//     }
//     componentWillMount() {
//         this.props.load().then((mod) => this.setState(() => ({
//             component: mod.default
//         })))
//     }
//     render() {
//         return this.props.children(this.state.component);
//     }
// }

// const About = props => (
//     <DynamicImport load={() => import('../pages/About/About')}>
//         {(Component) => Component === null ? <h1>Loading!</h1> : <Component {...props} />}
//     </DynamicImport>
// )

const HomeRoute = () => {
    return (
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
    );
};

export default HomeRoute;