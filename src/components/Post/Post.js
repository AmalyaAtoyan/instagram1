import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../store/slices/posts/postsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { withLessMore } from '../../hoc/withLessMore'

function Post({id, img, name, isShow, toggleToShow, likesCount, postText, timeAgo,comments}) {
  
    const { currentUser } = useSelector(selectUsers)
    const formRef = useRef(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const body = formRef.current[0].value
        dispatch(addComment({
            postId:id,
            username:currentUser.username,
            body
        }))

        formRef.current.reset()
    }
  
  
  
    return (
        <div className="post">
            <div className="info">
                <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                    <div className="profile-pic"><img src={`https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg`} alt="" /></div>
                    <p className="username">{name}</p>
                </NavLink>
                <img src={IMAGES.option} className="options" alt=""/>
            </div>
            <img src={img} className="post-image" alt=""/>
            <div className="post-content">
                <div className="reaction-wrapper">
                    <img src={IMAGES.like} className="icon" alt=""/>
                    <img src={IMAGES.comment} className="icon" alt=""/>
                    <img src={IMAGES.send} className="icon" alt=""/>
                    <img src={IMAGES.save} className="save icon" alt=""/>
                </div>
                <p className="likes">{likesCount}</p>
                {
                    postText &&  
                        <p className="description">
                            <span>{name} </span> 
                            {postText}
                        </p>
                }
                {
                    isShow && !!comments.length &&
                    comments.map(comment =>(
                        <p key={comment.id} className="description"><span>{comment.username} </span> {comment.body}</p>
                    ))
                }
                {
                    !isShow && !!comments.length && 
                    <>
                        {
                            comments.slice(0,2).map(comment =>(
                                <p key={comment.id} className="description"><span>{comment.username} </span> {comment.body}</p>
                            ))
                        }
                        <h2 onClick={toggleToShow} style={{cursor:'pointer'}}>All Comments</h2>
                    </>
                }
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="comment-wrapper">
                    <img src={IMAGES.smile} className="icon" alt=""/>
                    <input onFocus={toggleToShow}    type="text" className="comment-box" placeholder="Add a comment"/>
                    <button className="comment-btn">post</button>
                </div>
                <p className='post-time2'>{timeAgo}</p>
            </form>
        </div>
  )
}

export default withLessMore(Post)