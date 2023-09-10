import React from 'react';
import classes from './UserList.module.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
const UserList = (props) => {

    if(props.items.length === 0)
    {
        return <Card className={classes.center}>
            <h2>No User Found.</h2>
        </Card>
    }

    return (
        <ul>
            {props.items.map((user,idx) => ( <UserItem id={user.id}
                                                        key={user.id} image={user.image}  name ={user.name} placeCount={user.places} />))}
        </ul>
    )
}

export default UserList
