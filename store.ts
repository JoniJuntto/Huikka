import {configureStore} from '@reduxjs/toolkit';
import playersReducer from './features/PlayersSlice';
import drinksReducer from './features/DrinksSlice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    drinks: drinksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
