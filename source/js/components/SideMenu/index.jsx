import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import { routeCodes } from '../../routes';

import logo from '../../../assets/img/logo.jpg';

import './_SideMenu.scss';

export default class SideMenu extends Component {

  render() {
    return (
      <div className='SideMenu'>
        <div className='SideMenu-links'>
          <IndexLink
            to={ routeCodes.HOME }
          >
            <div className='SideMenu-logo'>
              <img
                src={ logo }
                alt='logo'
              />
            </div>
          </IndexLink>

        </div>
      </div>
    );
  }
}

// <div className='SideMenu-link'>
//
// </div>
