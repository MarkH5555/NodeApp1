import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
   constructor() {
    super();
    this.state = {
      users: []
    }

  }

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({users}, () => console.log('Users fetched', users)));
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul class="name-list">
          {this.state.users.map((user, i) => 
            <li key={i}>{user.cName} {user.sName}</li>
            )}

        </ul>
       
      </div>
    );
  }
}

export default Users;
