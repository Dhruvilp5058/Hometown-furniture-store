import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    orderValue: [],

};
export const orderSaveSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        ordercart: (state, action) => {
            state.orderValue = [...state.orderValue, action.payload]
        },
    },
});
export const {ordercart } = orderSaveSlice.actions;

export default orderSaveSlice.reducer;
