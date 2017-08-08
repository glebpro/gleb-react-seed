import React, { Component } from 'react';
import axios from 'axios';

import "./_Home.scss";

export default class Home extends Component {

  componentDidMount() {
    var _this = this;
    this.serverRequest =
      axios
        .get("http://localhost:3001/v2/")
        .then(function(result) {
          console.log(result);
        });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

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
