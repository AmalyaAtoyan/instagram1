import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const usersSlice = createSlice({
    name:'users',
    initialState:{
        usersData:[],
        currentUser:null
    },
    reducers:{
        logIn(state,{payload}){
            const foundUser = state.usersData.find(user  => ( user.username === payload.username && user.password === payload.password) || ( user.email === payload.username && user.password === payload.password))
            state.currentUser = foundUser || null;
        },
        logOut(state){
            state.currentUser = null;
        },
        addPost(state,{ payload }){
            const idx = state.usersData.findIndex(user => user.id === state.currentUser.id)
            
            state.usersData[idx].posts.unshift(payload)
            state.currentUser.posts.unshift(payload)
        },
        deletePost(state,{payload}){
            const userIdx = state.usersData.findIndex(user => user.id === state.currentUser.id)
            const postIdx = state.currentUser.posts.findIndex(post => post.id === payload)
            
            state.currentUser.posts.splice(postIdx,1)
            state.usersData[userIdx].posts.splice(postIdx,1)

        }
    },
    extraReducers:{
        [fetchUsers.fulfilled]:(state,{ payload }) => {
            state.usersData.push(...payload)
        }
    }
})

export const selectUsers = state => state.users

export const { logIn,logOut,addPost,deletePost } = usersSlice.actions

export const usersReducer = usersSlice.reducer

