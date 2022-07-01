import React from 'react';

/**
 * Renders an image element using interpolation to pass data from result to url 
 * @param {object} props - used to access server, id, and secret properties
 * @return {img} - image element wrapped in a list item for each result
 */
const Photo = (props) => {
    return (
      <li>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
      </li>

    )
  };

export default Photo;