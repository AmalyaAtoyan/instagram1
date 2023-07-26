import { useSelector } from 'react-redux'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { useMemo } from 'react'

function MessengerChatSection() {
	const { usersData} = useSelector(selectUsers)
	const { activeUserId } = useSelector(selectMessages)
	const { currentUser } = useSelector(selectUsers)

	const activeUsername = useMemo(() =>{
		return usersData.find(user => user.id === activeUserId).username
	},[usersData,activeUserId])

  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			<div className='userPart'>
				<img src={currentUser.avatar} className='avatarinTopChat'/>
				<p>{activeUsername}</p>
			</div>
			<div className='iPart'>
				<p>i</p>
			</div>
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default MessengerChatSection
