import React from 'react'
import PlaceList from '../components/PlaceList'
import image1 from '/home/dhruv/Desktop/mern/frontend/src/assets/meals.jpg';
import { useParams } from 'react-router-dom';


const UserPlace = () => {

    const DUMMY_PLACES = [
        {
            id:'p1',
            title:'Empire State Building',
            description:'One of the sky scrapper',
            image:image1,
            address:'unknown',
            location:{
                lat: 40.748,
                long: -73.987
            },
            creator:'u1'
        },
        {
            id:'p1',
            title:'Empire State Building',
            description:'One of the sky scrapper',
            image:image1,
            address:'unknown',
            location:{
                lat: 40.748,
                long: -73.987
            },
            creator:'u2'
        }
    ];
    const userId=useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId) 
  return (
   <PlaceList items={loadedPlaces} />
   
  )
}

export default UserPlace
