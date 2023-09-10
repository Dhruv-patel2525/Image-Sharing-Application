import React from 'react';
import classes from './PlaceList.module.css';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
const PlaceList = props  => {
    if(props.items.length === 0)
    {
        return (<div className={classes['place-list']}>
            <Card>No Places Found!</Card>
            <button>Share Place</button>
        </div>)
    }
     return (
        <ul className={classes['place-list']}>
        {props.items.map((place,index) => {return <PlaceItem key={place.id}
                                                             id={place.id}
                                                             image={place.image} 
                                                             title={place.title}
                                                             description={place.description} 
                                                             address={place.address} 
                                                             creatorId={place.creator} 
                                                             coordinates={place.location}/>})}
        </ul>
    )
}

export default PlaceList
