import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

import "./_TopMenu.scss"

export default class TopMenu extends Component {

  render() {
    return (
      <div className='TopMenu'>
        <div className='TopMenu-links'>
          <IndexLink
            activeClassName='TopMenu-link--active'
            className='TopMenu-link'
            to={ routeCodes.HOME }
          >
            Home
          </IndexLink>
          <Link
            activeClassName='TopMenu-link--active'
            className='TopMenu-link'
            to={ routeCodes.ABOUT }
          >
            About
          </Link>
          <Link
            activeClassName='TopMenu-link--active'
            className='TopMenu-link'
            to='404'
          >
            404
          </Link>
        </div>
      </div>
    );
  }
}

// <div className='Menu-logo'>
//   <img
//     src={ workAndCoLogoImg }
//     alt='fortgallica'
//   />
// </div>
