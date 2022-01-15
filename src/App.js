import React, { useState,useEffect} from 'react';
import PostService from './API/postService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyLoader from './components/UI/loader/MyLoader';
import { useFetching } from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';


import './styles/App.css';
import { getArrayPages, getPageCount } from './utils/pages';

function App() {
  let [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort:'',query:''})
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts,filter.sort, filter.query);


  let pagesArray = getArrayPages(totalPages)
  for (let index = 0; index < totalPages; index++) {
    pagesArray.push(index + 1)
    
  }


  const [fetchPosts,isPostLoading,postError] = useFetching(async() => {
    const response = await  PostService.getAll(limit,page)
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  useEffect(() => {
    fetchPosts()
  }, [page])

 

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  
  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <PostForm create={createPost}/>
      <div>
        <hr style={{margin:'15px 0'}}/>
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1> Произошла ошибка ${postError}</h1>}
      </div>

      {isPostLoading 
      ? <div style={{display:'flex',justifyContent:'center', marginTop:'50px'}}> <MyLoader /></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов ' /> 
      }
      
      
      <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                        {p}
                    </span>
            )}
        </div>
    </div>
  );
    }
export default App;
