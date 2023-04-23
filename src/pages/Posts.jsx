import React, { useEffect, useState } from 'react';
import "../styles/myStyle.css";
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/modals/MyModal';
import MyButton from '../components/UI/buttons/MyButton';
import { usePosts } from '../components/hooks/UsePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loaders/Loader';
import { useFetching } from '../components/hooks/UseFetching';
import Pagination from '../components/UI/pagination/Pagination';
import { getPageCount } from '../utils/pages';


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  //had post from children component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)

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

      {postError &&
        <h1>There is a mistake ${postError}</h1>
      }

      {isPostsLoading
        ?
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Loader />
        </div>
        :
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Posts list-1"}
        />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />

    </div>
  )
}
export default Posts;

