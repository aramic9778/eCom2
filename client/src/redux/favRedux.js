import { createSlice } from "@reduxjs/toolkit";
const favSlice = createSlice({
    name: "fav",
    initialState: {
        products: [],
        quantity: 0,
    },
    reducers: {
        addProductFav: (state, action) => {
            state.products.push(action.payload);

            state.quantity += 1;
        },
        deleteProduct: (state, action) => {
            var index = state.products.findIndex(function (o) {
                return o._id === action.payload._id;
            })

            state.products.splice(index, 1);
            state.quantity -= 1;
        },
    },
})

export const { addProductFav, deleteProduct } = favSlice.actions
export default favSlice.reducer;