import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading:false,
        data:[]
    },
    reducers:{
        addComment(state,{ payload:{postId, username, body} }) {
            const idx = state.data.findIndex(el => el.id === postId)
            state.data[idx].comments.push({
                id:new Date().getTime().toString(),
                username,body
            })
        },
        addPost(state,{payload}){
            state.data.unshift(payload)
        },
        deletePost(state,{payload}){
            const idx = state.data.findIndex(el => el.id === payload)
            if(idx !== -1){
                state.data.splice(idx,1)
            }
        }
    },
    extraReducers:{
        [fetchPosts.pending]:(state) =>{
            state.isLoading = true
        },
        [fetchPosts.fulfilled]:(state,{ payload }) =>{
            state.isLoading = false
            state.data = payload
        }
    }
})

export const selectPosts = state => state.posts

export const {addComment,addPost,deletePost} = postsSlice.actions

export const postsReducer = postsSlice.reducer