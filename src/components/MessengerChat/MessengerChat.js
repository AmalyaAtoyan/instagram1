import { useSelector } from 'react-redux'
import './MessengerChat.css'
import { selectMessages } from '../../store/slices/messages/messagesSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useEffect, useRef } from 'react'


function MessengerChat() {
  const { currentUser } = useSelector(selectUsers)
  const { currentDialog } = useSelector(selectMessages)

  const divRef = useRef(null)

  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight
  },[currentDialog])



  return (
      <div className='MessengerChat' ref={divRef}>
            {
              currentDialog.map(message => (
                <div
                key={message.id}
                className={message.fromId === currentUser.id ? 'messagesFromMe' : 'messagesToMe'}
                >
                    <p className='senderPartImg'>
                        {message.fromId !== currentUser.id ?
                          <img src={currentUser.avatar} className='senderImg' alt='Sender Avatar' /> : ''
                        }
                    </p>
                    <p className='sendedMessage'>{message.text}</p>
                </div>
              ))
            }
      </div>
  )
}

export default MessengerChat
