import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';

// Had a client side that didn't have a backend. spun up a backend very quickly using those steps and then configured into applicaiton through these imports.
import Amplify from 'aws-amplify';
import configuration from './aws-exports';

Amplify.configure(configuration);

ReactDOM.render(<Application />, document.getElementById('root'));
