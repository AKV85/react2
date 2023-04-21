import React, { useEffect, useState } from 'react';
import "./styles/myStyle.css";
// import PostItem from "./components/PostItem";
import PostList from './components/PostList';
// import MyButton from './components/UI/buttons/MyButton';
// import MyInput from './components/UI/inputs/MyInput';
import PostForm from './components/PostForm';
// import MySelect from './components/UI/selects/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/modals/MyModal';
import MyButton from './components/UI/buttons/MyButton';
import { usePosts } from './components/hooks/UsePosts';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "aaa" },
    { id: 2, title: "PHP", body: "ccc" },
    { id: 3, title: "Java", body: "bb" },
    { id: 4, title: "Python", body: "a1" },
  ])

  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(()=> {
fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const response = await axios.get(' https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  //had post from children component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>
        GET POSTS
      </button>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm
          create={createPost}
        />
      </MyModal>

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

