import React from 'react'
import UserList from '../components/UserList'
import image1 from '/home/dhruv/Desktop/mern/frontend/src/assets/meals.jpg';

const Users = () => {
  const USERS = [
    {id:'u1', name:'peacock' ,image : image1 ,places:5}
  ]
  return (<>
  <UserList items={USERS} />
  </>)
}

export default Users;




