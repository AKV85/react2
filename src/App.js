import React, { useState } from 'react';
import "./styles/myStyle.css";
import PostItem from "./components/PostItem"

function App() {
  const [posts, setPosts] = useState( [
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "PHP", body: "Description" },
    { id: 3, title: "Java", body: "Description" },
    { id: 4, title: "Python", body: "Description" },

  ])

  return (
    <div className="App">
      {posts.map((post) =>
          <PostItem post={post} key={post.id} />
       )}
    </div>
  );
}

export default App;
