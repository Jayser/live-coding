import React from 'react';
import { Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const UsersList = ({ history, ...props }) => {
    return (
        <Table dark hover>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Calls</th>
            </tr>
            </thead>
            <tbody>
            {props.users.map(user => (
                <tr key={user.id} onClick={() => history.push(`/users/${user.id}`)}>
                    <th scope="row">{user.id}</th>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.userName}</td>
                    <td>{user.calls}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default withRouter(UsersList);
