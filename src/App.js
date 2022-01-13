import React, { useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css';

function App() {
  let [posts, setPosts] = useState([
    {id:1, title:"A", body:'D'},
    {id:2, title:"B", body:'C'},
    {id:3, title:"C", body:'B'},
    {id:4, title:"D", body:'A'},
  ]);

  const [selectedSort,setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPost = (sort) => {
    setSelectedSort(sort)
    console.log(sort)
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <div>
        <hr style={{margin:'15px 0'}}/>
        <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue="сортировка"
        option={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
        />
      </div>
      {posts.length 
      ? <PostList remove={removePost} posts={posts} title='Список постов ' /> 
      : <h1 style={{textAlign:'center', marginTop:20}}>Посты не найдены</h1>
      }
      
    </div>
  );
}

export default App;
