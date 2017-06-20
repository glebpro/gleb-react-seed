import React, { Component } from 'react';

import "./_Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className='View Home'>

        <h1>
          This is the Home Page
        </h1>

        <p>
            Here you put stuff.
        </p>

      </div>
    );
  }
}

// <PageTransition>
//   {this.props.children}
// </PageTransition>
