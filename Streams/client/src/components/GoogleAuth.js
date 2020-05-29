import React, { Component } from 'react';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '330305589245-secsl20nv4n2okv9rkbsppg0ec0e8hh3.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
