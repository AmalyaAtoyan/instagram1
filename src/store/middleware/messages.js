const togglePayloadInMessages = (store) => (next) => (action) => {
    if(action.type === 'messages/toggleActiveUser'){
        action.payload = {
            fromId: store.getState().users.currentUser.id,
            toId:action.payload
        }
    }
    next(action)
}

const sendEmoji = (store) => (next) => (action) => {
    if(action.type === 'messages/sendEmoji'){
        action.payload = {
            fromId: store.getState().users.currentUser.id
        }
    }
    next(action)
}

const ignoreEmptyMessage = (store) => (next) => (action) => {
    if (action.type === 'messages/addMessage') {
      const newText = action.payload.text.trim();
  
      if (newText === '') {
        return;
      }
      action.payload = { ...action.payload, text: newText };
    }
  
    next(action);
  };

export default [togglePayloadInMessages,sendEmoji,ignoreEmptyMessage]