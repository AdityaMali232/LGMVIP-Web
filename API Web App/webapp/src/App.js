import React, { useState } from 'react';
import './App.css';

const App=() => {

  const [users , setUser] = useState([]);

  const loadUsers = async() => {
    const callapi = await fetch("https://reqres.in/api/users?page=1");
    const giveapi = await callapi.json();
    setUser(giveapi.data)
  };

  const clear = () => {
    setUser([])
  };


  return (
    <React.Fragment>
    
      <div className='navbar'>
        <h1>USER DATA</h1>

        <div className='header'>
          <button className='getdata' onClick={loadUsers}>GET DATA</button>
          <button className='cleardata' onClick={clear}>CLEAR DATA</button>
        </div>

      </div>

      <div className='datatable'>
        <table className='table'>
          <thead className='heads'>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>

          
          {users.map(({id , first_name , last_name , email , avatar}) => 
          (

            <tr className='datas' key={id}>
              <td>{id}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{avatar}</td>
            </tr>
            

          ))}
          

        </table>
        
        <ol>

        </ol>
      </div>

    </React.Fragment>
    
  )
}

export default App;