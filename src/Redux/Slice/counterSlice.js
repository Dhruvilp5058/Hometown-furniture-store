import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
  cartvalue: [],
  buyvalue: [],
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    savecart: (state, action) => {
      if (action.payload === null) {
        state.value = [];
      } else {
        state.value.push(action.payload);
      }
    },
    cartData: (state, action) => {
      state.value=action.payload
    },
    removecart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.value = state.value.filter(item => item.id !== itemIdToRemove);
    },
  
    maincart: (state, action) => { 
      state.cartvalue =[...state.cartvalue,action.payload] 
    },  
  },
});
export const {savecart, removecart, maincart,cartData
  //  buycart
  } = counterSlice.actions;

export default counterSlice.reducer;
