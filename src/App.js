import React, { useState } from 'react';
import "./styles/myStyle.css";
import PostItem from "./components/PostItem"
import PostList from './components/PostList';
import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
    { id: 4, title: "Python", body: "Description" },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addNewPost = (e) => {
    e.preventDefault()
   const newPost = {
    id: Date.now(),
    title,
    body
   }
    setPosts ([...posts, newPost])
  }

  return (
    <div className="App">
      <form>
        {/*Controlled component */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Post name"
        />

        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPost}>
          Create post
        </MyButton>
      </form>
      <PostList posts={posts} title={"Posts list-1"} />


    </div>
  )
}
export default App;
