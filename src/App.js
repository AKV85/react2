import React, { useMemo, useState } from 'react';
import "./styles/myStyle.css";
// import PostItem from "./components/PostItem";
import PostList from './components/PostList';
// import MyButton from './components/UI/buttons/MyButton';
// import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';
// import MySelect from './components/UI/selects/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/modals/MyModal';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "aaa" },
    { id: 2, title: "PHP", body: "ccc" },
    { id: 3, title: "Java", body: "bb" },
    { id: 4, title: "Python", body: "a1" },
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //had post from children component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyModal></MyModal>
      <PostForm
        create={createPost}
      />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Posts list-1"}
      />
    </div>
  )
}
export default App;

