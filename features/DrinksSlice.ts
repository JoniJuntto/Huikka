import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

const initialState = {
  drinks: 3,
};

export const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {
    setDrinks: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setDrinks} = drinksSlice.actions;

export const selectDrinks = (state: RootState) => state.drinks.value;

export default drinksSlice.reducer;
