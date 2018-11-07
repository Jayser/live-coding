import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { HomeScreen, UserScreens } from './screens';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomeScreen}/>
            <Route path="/users" component={UserScreens}/>
        </div>
    </Router>
);

export default App;
