import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/App.scss';
import './styles/Player.scss';
import {Provider} from "react-redux";
import store from "./store";
import App from './App';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));