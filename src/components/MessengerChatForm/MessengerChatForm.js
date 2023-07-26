import './MessengerChatForm.css'
import IMAGES from '../../images'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, sendEmoji } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'


function MessengerChatForm() {
	const { currentUser } = useSelector(selectUsers)

	const formRef = useRef(null)
	const dispatch = useDispatch()


	const handleSubmit = (e) => {
		e.preventDefault()
		const text = formRef.current[0].value


		dispatch(addMessage({
			fromId:currentUser.id,
			text
		}))

		formRef.current.reset()
	}

	const handleEmojiClick = () => {
		dispatch(sendEmoji());
	  };




  return (
	<form ref={formRef} onSubmit={handleSubmit} className='formChat'>
		<div className='Chat-input'>
			<input type='text' placeholder='Message...'/>
			<label>
				<input style={{display:'none'}} type='submit'/>
			</label>
			<img src={IMAGES.like} alt='' onClick={handleEmojiClick}/>
		</div>
	</form>
  )
}

export default MessengerChatForm
