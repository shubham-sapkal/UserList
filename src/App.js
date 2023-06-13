import React, { useState } from 'react';
import UserList from './components/Users/UserList';

import AddUser from './components/Users/AddUser';
// import UserList from './components/UserList';

function App() {
  
  const [ userList, setUserList ] = useState([]);
  
  const addUserHandler = (uName, uAge) => {

    setUserList( (prevData) => {
        
      return [
        ...prevData,
        {name: uName, age: uAge, id: Math.random().toString()}
      ];

    } );

    console.log(userList);

  }

  return (
    <React.Fragment>
        <AddUser addUser={addUserHandler}/>
        { userList.length !== 0  && <UserList users={userList} />  }
    </React.Fragment>
  );
}

export default App;
