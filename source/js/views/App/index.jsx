import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopMenu from '../../components/TopMenu';
import SideMenu from '../../components/SideMenu';

import './_App.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <SideMenu />

        <div className='Page'>
          <TopMenu />
          { children }
        </div>
      </div>
    );
  }
}
