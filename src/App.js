import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    {id:1, title:"JavaScript", body:'Description'},
    {id:2, title:"JavaScript", body:'Description'},
    {id:3, title:"JavaScript", body:'Description'},
    {id:4, title:"JavaScript", body:'Description'},
  ]);
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts} title='Список постов 1' />
    </div>
  );
}

export default App;
