import React, { Component } from 'react';
import { Table } from 'reactstrap';

export class UserCalls extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users[this.props.match.params.userId],
            searchValue: ''
        }
    }

    handleChange({ target: { value } }) {
        this.setState({ searchValue: value })
    }

    getUserCallsList(users) {
        if (this.state.searchValue) {
            return users.filter(user => user.phone.includes(this.state.searchValue));
        }

        return users;
    }

    render() {
        return (
            <Table dark>
                <thead>
                <tr>
                    <td colSpan="5">
                        Search by phone: &nbsp;
                        <input type="text" value={this.state.searchValue} onChange={e => this.handleChange(e)}/>
                    </td>
                </tr>
                </thead>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Phone</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>date</th>
                </tr>
                </thead>
                <tbody>
                {this.getUserCallsList(this.state.users).map(user => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.phone}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.date}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}
