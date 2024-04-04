import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        addItem: (state, action) => {
            state.value.push(action.payload);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const index = state.value.findIndex(item => item.id === itemId);
            if (index !== -1) {
                state.value.splice(index, 1);
                return;
            }
        },
        addMessage: (state, action) => {
            state.value.push(action.payload);
          },
          clearChat: (state) => {
            state.value = [];
          }
    },
});
// console.log('slice======', counterSlice);
export const { increment, decrement, incrementByAmount, addItem, removeItem ,addMessage,clearChat} = counterSlice.actions;

export default counterSlice.reducer;