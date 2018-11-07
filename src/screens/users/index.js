import React from 'react';
import { Route } from "react-router-dom";

import UsersScreen from './users';
import UserCallsScreen from './user-calls';

export default ({ match: { path } }) => (
    <div>
        <Route exact path={`${path}`} component={UsersScreen}/>
        <Route path={`${path}/:userId`} component={UserCallsScreen}/>
    </div>
);
