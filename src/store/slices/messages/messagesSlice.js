const { createSlice } = require("@reduxjs/toolkit");

const messagesSlice = createSlice({
    name:'messages',
    initialState:{
        allMessages:[],
        activeUserId:'',
        currentDialog:[]
    },
    reducers:{
        toggleActiveUser(state,{payload}){
            state.activeUserId = payload.toId
            state.currentDialog = state.allMessages
                            .filter(message =>( message.toId === payload.toId && message.fromId === payload.fromId) ||
                            message.toId === payload.fromId && message.fromId === payload.toId)
        },
        addMessage(state,{ payload }){
            const newMessage = {
                id:new Date().getTime().toString(),
                fromId:payload.fromId,
                toId:state.activeUserId,
                text:payload.text
            }
            state.allMessages.push(newMessage)
            state.currentDialog.push(newMessage)
        },
        removeActiveUser(state){
            state.activeUserId = ''
            state.currentDialog = []
        },
        sendEmoji(state,{ payload}) {
            const newMessage = {
              id: new Date().getTime().toString(),
              fromId:payload.fromId,
              toId: state.activeUserId,
              text: '❤️'
            };
            state.allMessages.push(newMessage);
            state.currentDialog.push(newMessage);
          }
    }
})

export const selectMessages = state =>state.messages

export const { toggleActiveUser, addMessage, removeActiveUser,sendEmoji } = messagesSlice.actions

export const messagesReducer = messagesSlice.reducer