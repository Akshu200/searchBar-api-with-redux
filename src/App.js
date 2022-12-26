import {useEffect, useState} from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { getPost } from './feature/postSlice/slice';
import './App.css';

function App() {
  const [search , setSearch] = useState('');
  const {post, loading , error} = useSelector(state=>state.post)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPost())
  },[])

  return (
    <div className="App">
     search API wit reduc toolkit
      <br/>
      <input placeholder='start typing...' onChange={e=>setSearch(e.target.value)}/>
     {
      loading ? <div>Loading...</div> : ''
     }
     {
      post.filter((value)=>{
        if(search === ''){
          return value;
        }
        else if (
          value.userId.toString().includes(search.toString())
          // for string in input field value.userId.toLowerCase().includes(search.toLowerCase())
        ) {
          return value;
        }
      })
      .map((item,index)=>
        <div>
        <p key={index}>Id :{item.id}</p>
        <p key={index}>Title :{item.title}</p>
        <p key={index}>Body : {item.body}</p>
        </div>
      
        
      )
     }

    </div>
  );
}

export default App;
