import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
        <nav className="main-nav">
          <ul>
            <li><NavLink to='/cats' onClick={this.props.navChosen} id='cats'>Cats</NavLink></li>
            <li><NavLink to='/dogs' onClick={this.props.navChosen} id='dogs'>Dogs</NavLink></li>
            <li><NavLink to='/birds' onClick={this.props.navChosen} id='birds'>Birds</NavLink></li>
          </ul>
        </nav> 
    )
  }
}

export default withRouter(Nav);