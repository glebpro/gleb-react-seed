import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { testAction, testAsync } from 'actions/app';

// @connect(state => ({
//   asyncData: state.app.get('asyncData'),
//   asyncError: state.app.get('asyncError'),
//   asyncLoading: state.app.get('asyncLoading'),
//   counter: state.app.get('counter'),
// }))

export default class Home extends Component {
  // static propTypes = {
  //   asyncData: PropTypes.string,
  //   asyncError: PropTypes.object,
  //   asyncLoading: PropTypes.bool,
  //   counter: PropTypes.number,
  //   // from react-redux connect
  //   dispatch: PropTypes.func,
  // }

  // constructor() {
  //   super();
  //
  //   this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
  //   this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
  // }
  //
  // handleAsyncButtonClick() {
  //   const { dispatch } = this.props;
  //
  //   dispatch(testAsync());
  // }
  //
  // handleTestButtonClick() {
  //   const { dispatch } = this.props;
  //
  //   dispatch(testAction());
  // }

  render() {
    // const {
    //   asyncData,
    //   asyncError,
    //   asyncLoading,
    //   counter,
    // } = this.props;

    return (
      <div className='Home'>

        <h1>
          This is the Home Page.
        </h1>

        <p>
            Here you put stuff.
        </p>

      </div>
    );
  }
}


// <h3>Synchronous action</h3>
// <div className='Example'>
//   <p>Counter: { counter }</p>
//   <button onClick={ this.handleTestButtonClick }>
//     Increase
//   </button>
// </div>
//
// <h3>Async action example</h3>
// <div className='Example'>
//   { asyncData && <p>{ asyncData }</p> }
//   { asyncLoading && <p>Loading...</p> }
//   { asyncError && <p>Error: { asyncError }</p> }
//   <button
//     disabled={ asyncLoading }
//     onClick={ this.handleAsyncButtonClick }
//   >
//     Get async data
//   </button>
// </div>
