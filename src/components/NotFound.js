import React from 'react';

/**
 * Displays "404" message if page doesn't exist or 
 * "No results" message if no results found from search
 * @param {object} props 
 */
const NotFound = props => {
  if (props.is404) {
    var erorrMsg = "404: Page not found"
  }
  return (
    <div className="not-found">
      <h2>{erorrMsg || "No results found"}</h2>
      <h3>{`‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚`}</h3>
      <p> Please try again.</p>
    </div>
  )


}


export default NotFound;