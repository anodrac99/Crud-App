import React from 'react';
import '../styles/UserList.css'

const UserList = ({users,editUser,deleteUser}) => {

    

    return (
        <div>
                <div className='cards-container'>
                    {
                        users.map(user => (
                                <ul key={user.id} className='userList-container'>
                                    <li className='card-name'>{user.first_name} {user.last_name}</li>

                                    <li className='email-text'>Email:</li>
                                    <li className='card-email'>{user.email}</li>

                                    <li className='birthday-text'>Birthday:</li>
                                    <li className='card-birthday'><i class="fa-solid fa-cake-candles"></i> {user.birthday}</li>
                                    <div className='button-container'>
                                        <button className='button-delete' onClick={()=>deleteUser(user)}><i class="fa-solid fa-trash"></i></button>
                                        <button className='button-edit' onClick={()=> editUser(user) }><i class="fa-solid fa-pen"></i></button>
                                    </div>
                                </ul>
                        ))
                    }
                </div>
        </div>
    );
};

export default UserList;