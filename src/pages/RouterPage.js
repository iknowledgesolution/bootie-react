import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </Router>
        </div>
    )
}
