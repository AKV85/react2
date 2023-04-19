import React, { useState } from 'react';
import Counter from "./components/Counter";
import ClassCounter from './components/ClassCounter';
import "./styles/myStyle.css";


function App() {
  // const [value, setValue] = useState("some text in input");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1.JS</strong>
          <div>
            JavaScript is the programming language of the Web.
          </div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>

  );
}

export default App;
