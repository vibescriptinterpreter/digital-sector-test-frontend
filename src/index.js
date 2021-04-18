import { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const app = createElement(App);

ReactDOM.render(app, document.querySelector('#root'));
