import React from 'react';

import { BaseLayout, Breadcrumbs } from '../../core';
import { UserCalls } from '../../features';
import { userCalls } from './data';

const UserCallsScreen = props => (
    <BaseLayout title="User Calls" {...props}>
        <Breadcrumbs />
        <UserCalls users={userCalls} {...props} />
    </BaseLayout>
);

export default UserCallsScreen;
