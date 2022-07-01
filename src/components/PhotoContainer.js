import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

/**
 * Renders list of image elements if results found
 * @param {object} - props - data returned from API 
 * @return {img} - an image element (Photo component) for every result 
 * If no results found, renders NotFound component
 */
const PhotoContainer = props => {
  const results = props.data; //array of objects
  if (results.length !== 0) {
  return(
    <div className='photo-container'>
        <h2>.˳⁺⁎˚ ꒰ఎ {props.query} ໒꒱ ˚⁎⁺˳ .</h2>
            <ul>
            {results.map(photo => (
             <Photo server={photo.server} id={photo.id} secret={photo.secret} key={photo.id}/>
            ))}
            </ul>
    </div>
); 
  }
   else { 
   return <NotFound />
  }

}

export default PhotoContainer;