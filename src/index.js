import React from 'react';
import ReactDOM from 'react-dom';
import Application from './Application';
import {CardProvider} from './CardContext';
import './styles.css';

const rootElement = document.getElementById("root");

// ReactDOM.render(<Application />, rootElement);

ReactDOM.render(<CardProvider><Application /></CardProvider>, rootElement);