import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import 'reset-css';
import App from './App';
import ApolloClient from './graphQl/ApolloClient';

ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
);
