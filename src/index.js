// react core
import React from 'react';
// render Component react to its DOM
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// creating a Server work on development environment so that we could save the cache to the local
import registerServiceWorker from './registerServiceWorker';



//[callback]: optional callbqck, if none => null
// In practice, most React apps only call ReactDOM.render() once. 
// In the next sections we will learn how such code gets encapsulated into stateful components.
ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
registerServiceWorker();
