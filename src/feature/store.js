import {configureStore} from '@reduxjs/toolkit'
import PostSlice from './postSlice/slice'
const store =configureStore({

    reducer:{
        post:PostSlice,
    }
})

export default store;