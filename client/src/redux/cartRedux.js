import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += action.payload.quantity;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        deleteProduct: (state, action) => {
            var index = state.products.findIndex(function (o) {
                return o._id === action.payload._id;
            })
            state.products.splice(index, 1);
            state.total -= action.payload.price * action.payload.quantity;
            state.quantity -= action.payload.quantity;
            // state.products = [];
            // state.quantity = 0;
            // state.total = 0;

        },
        updateProduct: (state, action) => {
            var index = state.products.findIndex(function (o) {
                return o._id === action.payload._id;
            })
            state.products[index].quantity += action.payload.quantity;
            state.total += action.payload.price;
            state.quantity += 1;

        },

        updateProductPlus: (state, action) => {
            var index = state.products.findIndex(function (o) {
                return o._id === action.payload._id;
            })
            state.products[index].quantity += 1;
            state.total += action.payload.price;
            state.quantity += 1;
        },
        updateProductMinus: (state, action) => {
            var index = state.products.findIndex(function (o) {
                return o._id === action.payload._id;
            })
            state.products[index].quantity -= 1;
            state.total -= action.payload.price;
            state.quantity -= 1;
        },
    },
})

export const { addProduct, deleteProduct, updateProduct, updateProductMinus, updateProductPlus } = cartSlice.actions
export default cartSlice.reducer;