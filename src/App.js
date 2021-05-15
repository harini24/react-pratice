import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers'
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([])

  const addUserhandler = (uname, age) => {
    setUsers((prevUser) => {
      return [...prevUser, { name: uname, age: age, id :Math.random().toString() }];
    })
  }

  return (
  
    <React.Fragment>
      <AddUsers onAddUser={addUserhandler} />
      <UsersList users={users} />
    </React.Fragment>
  );
}

export default App;
