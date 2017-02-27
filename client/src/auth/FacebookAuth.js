import React from 'react';

export default class FacebookAuth extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();

    fetch('/api/v1/facebookAuth')
      .then(response => {
        debugger
      });
  }

  render() {
    return (
      <div className="ui center aligned padded grid">
        <button
          className="ui button blue"
          onClick={this.handleClick}>
          Facebook Login
        </button>
      </div>
    )
  }
}
// <div className="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="false"></div>
