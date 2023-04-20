import React, { useMemo, useState } from 'react';
import "./styles/myStyle.css";
// import PostItem from "./components/PostItem";
import PostList from './components/PostList';
// import MyButton from './components/UI/buttons/MyButton';
import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/selects/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "aaa" },
    { id: 2, title: "PHP", body: "ccc" },
    { id: 3, title: "Java", body: "bb" },
    { id: 4, title: "Python", body: "a1" },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')


  const sortedPosts = useMemo(() => {
    console.log("norma")
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //had post from children component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange ={e => setSearchQuery(e.target.value)}
          placeholder="Search..."

        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: 'title', name: "By name" },
            { value: 'body', name: "By description" }
          ]}
        />


      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={sortedPosts} title={"Posts list-1"} />
        :
        <h1 style={{ textAlign: 'center' }}>
          No posts find
        </h1>
      }
    </div>
  )
}
export default App;

