import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Controllers from './store/controllers';
import {ApolloProvider} from "@apollo/client";


ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={Controllers.client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.querySelector('#root')
);

