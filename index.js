import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import {BrowserRouter} from "react-router-dom";
import TempApp from "./TempApp";

ReactDOM.render(
        <BrowserRouter>
        <TempApp/>
        </BrowserRouter>

,document.getElementById('root'));
