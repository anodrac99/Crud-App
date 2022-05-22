import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UsersForm from './components/UsersForm';

function App() {

  const [users,setUsers]=useState([]);
  const[selectUser,setSelectUser]=useState(null);

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res=>setUsers(res.data))
  },[])
  
  const getUsers = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res=>setUsers(res.data))
      
  }

  const editUser = user =>{
    setSelectUser(user)
    setShowModal(true)

  }

  const deselectUser = ()=>{
    setSelectUser(null)
  }

  const deleteUser = user =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
    .then(()=>getUsers())
    alert(`${user.first_name} ${user.last_name} se ha Eliminado`)
    
  }
  
  const [showModal,setShowModal]=useState(false);

  const closeModal = ()=> setShowModal(false)


  
  
  return (
    <div className="App">
      
      { showModal && <UsersForm
        getUsers={getUsers}
        selectUser={selectUser}
        deselectUser={deselectUser}
        closeModal={closeModal}
      />}
      <div className='addUser-button-container'>
        <h2 className='title'>Users List</h2>
        <button onClick={()=>setShowModal(true)} className="addUser-button">Agregar Usuario</button>
      </div>

      <UserList 
        users={users}
        editUser={editUser}
        deleteUser={deleteUser}
      />

      
    </div>
  );
}

export default App;
