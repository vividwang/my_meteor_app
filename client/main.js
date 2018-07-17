import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from './app';

import './main.html';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});



