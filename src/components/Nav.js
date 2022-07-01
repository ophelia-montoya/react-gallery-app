import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
        <nav className="main-nav">
          <ul>
            <li><NavLink to='/cats' onClick={this.props.navSelection} id='cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs' onClick={this.props.navSelection} id='dogs'>Dogs</NavLink></li>
            <li><NavLink to='/birds' onClick={this.props.navSelection} id='birds'>Birds</NavLink></li>
          </ul>
        </nav> 
    )
  }
}

export default withRouter(Nav);