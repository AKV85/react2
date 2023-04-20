import React, { useState } from 'react';
import "./styles/myStyle.css";
import PostItem from "./components/PostItem"
import PostList from './components/PostList';
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
    { id: 4, title: "Python", body: "Description" },
  ])

const createPost =(newPost) => {
  setPosts([...posts, newPost])
}

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title={"Posts list-1"} />


    </div>
  )
}
export default App;

