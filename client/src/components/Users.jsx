import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
   constructor() {
    super();
    this.addNewName = this.addNewName.bind(this);
    this.update1 = this.update1.bind(this);
    this.update2 = this.update2.bind(this);
    this.sortStringBy = this.sortStringBy.bind(this);


    // If 'users' isn't initialised here as an empty array then a 'null' error is thrown when 
    // the array is mapped over
    this.state = {
      users: [],
      name1: '',
      name2: '',
    };

    //  Get data via fetch promise
    //  Convert the res to json then save the result in the users array
    fetch('/api/users')
      .then(res => res.json())
      .then(usersResult => this.setState({ users: usersResult }, () => console.log('Users fetched', usersResult)))
      .catch(() => console.log("No data found!"));
      
  }

  addNewName = () => {
    let newUserArray = this.state.users;
    let tempVal = {cName: this.state.name1, sName: this.state.name2};
    newUserArray.push(tempVal);

    this.setState({users: newUserArray}); // ES6 shorthand: {newUserArray}
  }

  update1(e) { // Need to make UI input box responsive
        this.setState({ name1: e.target.value });
  }

  update2(e) { // Need to make UI input box responsive
        this.setState({ name2: e.target.value });
  }

  sortStringBy(key) {

    console.log("Sort key: " +  key);

    let tmpUsers = this.state.users; 
    tmpUsers.sort( (a,b) => a[key].toLowerCase() > b[key].toLowerCase());

    return tmpUsers;
  }

  render() {

    let sortedUsers = this.sortStringBy('sName');

    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul className="name-list">
          {
            sortedUsers.map((user, i) => <li key={i}>{user.cName} {user.sName} <button>Del</button></li>)
          }
        </ul>
        <button onClick={this.addNewName}>Add New</button>
        <input onChange={ this.update1 }  value={ this.state.name1 } />
        <input onChange={ this.update2 }  value={ this.state.name2 } />      
      </div>
    );
  }
}

export default Users;
