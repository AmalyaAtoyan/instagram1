import './Messenger.css'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage';
import MessengerPeoplesMessages from '../MessengerPeoplesMessages/MessengerPeoplesMessages';
import MessengerChatSection from '../MessengerChatSection/MessengerChatSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeActiveUser, selectMessages } from '../../store/slices/messages/messagesSlice';
import ChatPart from '../ChatPart/ChatPart';


function Messenger() {
	const dispatch = useDispatch()
	const { activeUserId } = useSelector(selectMessages)

	useEffect(() =>{
		return () =>{
			dispatch(removeActiveUser())
		}
	},[])




  return (
	 <div className='Messenger'>
		<div className='Messenger-auto'>
			<div className='Messenger-left-col'>
				<div className='Messenger-left-col-direct'>
					<p>Direct</p>
					<i className="fa-duotone fa-pen-to-square"></i>
				</div>
				<div className='Messenger-left-col-peoples'>
					<div className='Primary-General'>
						<p>Primary</p>
						<p>General</p>
					</div>
					<MessengerPeoplesMessages />
				</div>
			</div>
			{
				activeUserId ?
				<MessengerChatSection /> : <ChatPart/>
			}
		</div>
	 </div>
  )
}

export default Messenger
