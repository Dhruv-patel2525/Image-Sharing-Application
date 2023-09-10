import React, { cloneElement } from 'react'
import classes from './PlaceItem.module.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
const PlaceItem = props => {
  return (
    <li className={classes['place-item']}>
        <Card className={classes['place-item__content']}>
            <div className={classes['place-item__image']}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes['place-item__info']}>
                <h2>{props.title} </h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes['place-item__actions']}>
                <Button inverse>View On Map</Button>
                <Button to={`/places/${props.id}`}>Edit</Button>
                <Button danger>Delete</Button>
            </div>
        </Card>
    </li>)
  
}

export default PlaceItem
