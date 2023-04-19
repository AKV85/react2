import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
   React.createElement('button', {
disabled:true
   }, 'Push me!!!'),
    document.getElementById("root")
);


