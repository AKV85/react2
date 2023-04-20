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

  const [post, setPost] = useState({title: "", body: ""})

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts ([...posts, {...post, id: Date.now()}])
    setPost({title: "", body: ""})
  }

  return (
    <div className="App">
      <form>
        {/*Controlled component */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post name"
        />

        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
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
