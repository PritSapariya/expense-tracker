import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="ddf959cc-badb-4f01-a2fc-647fb1053b7e" language="en-US" >
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

