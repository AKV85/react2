import React, { useState } from 'react';
import Counter from "./components/Counter";
import ClassCounter from './components/ClassCounter';
import "./styles/myStyle.css";
import PostItem from './components/PostItem';


function App() {
  // const [value, setValue] = useState("some text in input");

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JS', body: 'Description'}}/>
      <PostItem post={{id: 2, title: 'PHP', body: 'Description'}}/>
      <PostItem post={{id: 3, title: 'Java', body: 'Description'}}/>
      <PostItem post={{id: 4, title: 'Python', body: 'Description'}}/>

    </div>
  );
}

export default App;
