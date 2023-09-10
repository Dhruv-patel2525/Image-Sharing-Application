import React from 'react';
import classes from './UserItem.module.css';
import Avatar from '../../shared/components/UIElements/Avatar';
import {NavLink} from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
const UserItem = props => {
  return (
    <li className={classes['user-item']}>
          <Card className={classes['user-item__content']}>
            <NavLink to={`/${props.id}/places`}>
                <div className={classes['user-item__image']}>
                    <Avatar image={props.image} alt={props.name}/>
                    
                </div>
                <div className={classes['user-item__info']}>
                    <h2>{props.name}</h2>
                    <h3>{props.placeCount} {props.placeCount === 1 ?'Place':'Places'}</h3>
                </div>
              </NavLink>
            </Card>

    </li>
  )
}

export default UserItem
