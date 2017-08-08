import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './_TopMenu.scss';

export default class TopMenu extends Component {

  constructor(props) {
    super(props);

    this.routeCodes = props.routeCodes;
  }

  render() {

    function buildRoutes(routes) {
      const routeMenus = [];
      routes.map((route, i) => (
          routeMenus.push(
            <NavLink
              activeClassName='TopMenu-link--active'
              className='TopMenu-link'
              to={ route.path }
              key={ i }>
              { route.title}
            </NavLink>
          )
      ));
      return routeMenus;
    }

    return (
      <div className='TopMenu'>
        <div className='TopMenu'>
          { buildRoutes(this.routeCodes) }
        </div>
      </div>
    );
  }
}
