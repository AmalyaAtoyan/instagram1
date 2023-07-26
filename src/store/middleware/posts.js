
const ingnoreEmptyComments = (store) => (next) => (action) =>{
    if(action.type === 'posts/addComment' && !action.payload.body.trim()) {
        return
    }
    next(action)
}

const addPostMiddleWare = (store) => (next) => (action) =>{
    if(action.type === 'addPost'){
        const newPost = {
            id: new Date().getTime().toString(),
            img: action.payload.image,
            name: store.getState().users.currentUser.username,
            postText:  action.payload.postText,
            likesCount:Math.round(Math.random() * 400 + 500),
            timeAgo: Math.round(Math.random() * 7 + 2 )+ ' Minutes ago',
            comments:[]
        }

        store.dispatch({type:'users/addPost',payload: newPost})
        store.dispatch({type:'posts/addPost',payload:newPost})
        return
    }
    next(action)
}

export function addPost(payload) {
    return{
        type:'addPost',
        payload
    }
}

const deletePostMiddleWare = (store) => (next) => (action) =>{
    if(action.type === 'deletePost'){
        store.dispatch({type:'users/deletePost',payload:action.payload})
        store.dispatch({type:'posts/deletePost',payload:action.payload})
        return
    }
    next(action)
}



export default [ ingnoreEmptyComments,addPostMiddleWare,deletePostMiddleWare ]