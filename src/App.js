import React, { useState } from 'react';
import "./styles/myStyle.css";
// import PostItem from "./components/PostItem";
import PostList from './components/PostList';
// import MyButton from './components/UI/buttons/MyButton';
// import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/selects/MySelect';
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
    { id: 4, title: "Python", body: "Description" },
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //had post from children component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            {value: 'title', name: "By name"},
            {value: 'body', name: "By description"}

          ]}
        />

        
      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title={"Posts list-1"} />
        :
        <h1 style={{ textAlign: 'center' }}>
          No posts find
        </h1>
      }
    </div>
  )
}
export default App;

