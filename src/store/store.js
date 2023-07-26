import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/posts/postsSlice";
import postsMiddlewares from "./middleware/posts";
import { usersReducer } from "./slices/users/usersSlice";
import { searchReducer } from "./slices/search/searchSlice";
import ignoreSpacesInSearch from "./middleware/search";
import { messagesReducer } from "./slices/messages/messagesSlice";
import togglePayloadInMessages from "./middleware/messages";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
        posts:postsReducer,
        users:usersReducer,
        search:searchReducer,
        messages:messagesReducer
})

const persistConfig = {
    key: 'myinstagram',
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>{
        return [
            ...getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                  },
            }),
            ...postsMiddlewares,
            ...ignoreSpacesInSearch,
            ...togglePayloadInMessages
        ]
    }
})


export const persistor = persistStore(store)
export default store