import React, { useEffect } from 'react'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../store/slices/posts/postsAPI'
import { selectPosts } from '../../store/slices/posts/postsSlice'
import Spiner from '../Spiner/Spiner'


function Posts() {

    const {data:posts,isLoading} = useSelector(selectPosts)
    const dispatch = useDispatch()

    useEffect(() =>{
        if(!posts.length){
            dispatch(fetchPosts())
        }
    },[])

    return (
        <>
            {
                isLoading ? <Spiner/> :
                posts.map(el => <Post key={el.id} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} comments={el.comments}/>)
            }
        </>
    )
}

export default Posts