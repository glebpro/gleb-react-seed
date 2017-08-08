import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

import { Routes, routeCodes } from './Routes';

import SideMenu from 'components/SideMenu';
import TopMenu from 'components/TopMenu';

import "./_index.scss";

ReactDOM.render(
  <BrowserRouter>

    <div className='App'>

      <Route exact path="/" render={() => (
          <Redirect to="/home"/>
      )}/>

      <SideMenu homeRouteCode={ routeCodes[0] }/>

      <div className='Page'>
        <TopMenu routeCodes={ routeCodes } />
        <Routes />
      </div>

    </div>
  </BrowserRouter>

  ,document.getElementById('root')
);
