import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import getPosts from './async-example';

console.log(getPosts(8));

ReactDOM.render(<App />, document.getElementById('App'));
