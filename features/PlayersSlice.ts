import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState: any = {
  players: [],
};

export const playersSlice = createSlice({
  name: 'players',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePlayers: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const {changePlayers} = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players.value;

export default playersSlice.reducer;
