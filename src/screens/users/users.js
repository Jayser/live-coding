import React from 'react';

import { BaseLayout } from '../../core';
import { UsersList } from '../../features';
import { users } from './data';

const UsersScreen = props => (
    <BaseLayout title="Users" {...props}>
        <UsersList users={users} {...props} />
    </BaseLayout>
);

export default UsersScreen;
