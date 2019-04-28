import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import Button from '@material-ui/core/Button'
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button variant="contained" color="primary">
             Pay Now
          </Button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Novera <code>secure</code> wallet.
          </p>
          
          <a
            className="App-link"
            href="http://novera.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Exit
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
