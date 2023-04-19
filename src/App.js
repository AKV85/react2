import React, { useState } from 'react';
import Counter from "./components/Counter";
import ClassCounter from './components/ClassCounter';
import "./styles/myStyle.css";
import PostItem from './components/postItem';


function App() {
  // const [value, setValue] = useState("some text in input");

  return (
    <div className="App">
      <PostItem />
    </div>
  );
}

export default App;
