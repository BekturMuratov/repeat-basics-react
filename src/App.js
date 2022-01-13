import React, { useState ,useRef} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    {id:1, title:"JavaScript", body:'Description'},
    {id:2, title:"JavaScript", body:'Description'},
    {id:3, title:"JavaScript", body:'Description'},
    {id:4, title:"JavaScript", body:'Description'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title='Список постов 1' />
    </div>
  );
}

export default App;
