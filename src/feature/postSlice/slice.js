import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const  getPost = createAsyncThunk('getpost', async()=>

   { return await axios(`https://jsonplaceholder.typicode.com/posts`).then(res=>res.data)
}
)

const postSlice = createSlice({

    name:'post',
    initialState:{
        loading :false,
        post:[],
        error:false,
    },
    extraReducers:{
        [getPost.pending] :(state,action)=>{
            state.loading= true;
          
        },
        [getPost.fulfilled] : (state, action)=>{
            state.loading= false;
            state.post = action.payload
        },
        [getPost.rejected] : (state, action)=>{
            state.loading= false;  
            state.error=true;
        }
    }

})

export default postSlice.reducer;