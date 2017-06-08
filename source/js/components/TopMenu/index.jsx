import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';

import './_TopMenu.scss';

export default class TopMenu extends Component {

  render() {
    function correctCase(route) {
      return route[0].toUpperCase() + route.substr(1).toLowerCase();
    }

    function buildRoutes() {
      const routeMenus = [];
      Object.keys(routeCodes).forEach((route, i) => {
        if (route === 'HOME') {
          routeMenus.push(<IndexLink key={ i } activeClassName='TopMenu-link--active' className='TopMenu-link'to={ route }>{ correctCase(route) }</IndexLink>);
        } else {
          routeMenus.push(<Link key={ i } activeClassName='TopMenu-link--active' className='TopMenu-link'to={ route }>{ correctCase(route) }</Link>);
        }
      });
      return routeMenus;
    }

    return (
      <div className='TopMenu'>
        <div className='TopMenu-links'>
          { buildRoutes() }
        </div>
      </div>
    );
  }
}
