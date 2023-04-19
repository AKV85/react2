import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
   React.createElement('button', {
    onClick: () => console.log('CLICK')
}, 'Push me!!!'),
    document.getElementById("root")
);


