import './ChatPart.css'

function ChatPart() {
    return(
        <div className='directImgPart'>
            <div className='directPart'>
            <img src={`https://cdn-icons-png.flaticon.com/512/5728/5728145.png`} className='directImg'/>
            <h1 className='directPart'>Choose conversation!</h1>
            </div>
        </div>
    )
}

export default ChatPart