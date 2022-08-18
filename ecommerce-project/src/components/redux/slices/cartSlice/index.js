import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {},
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        info: state => state
    },
});

export const { info } = cartSlice.actions;
export default cartSlice;