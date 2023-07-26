import React, { useRef } from 'react';
import IMAGES from '../../images';
import './CreatePost.css'
import { useDispatch } from 'react-redux';
import { addPost } from '../../store/middleware/posts';


const CreatePost = () => {
    const formRef = useRef(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const [{value:image},{value:postText}] = formRef.current
        
        dispatch(addPost({image,postText}))
        
        formRef.current.reset()
    }


    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form style={{marginTop: '50px'}} ref={formRef} onSubmit={handleSubmit} className='addNewForm'>
                <input type='text' placeholder='Img' className='inputForNew'/>
                <input type='text' placeholder='Text' className='inputForNew'/>
                <label className="input-file">
                    <input type="submit" style={{display:'none'}}/>		
                    <span>Add</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;
