// features/orders/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  selectedOrder: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
      if (action.payload.length > 0) {
        state.selectedOrder = action.payload[0]; // ✅ auto-select first
      }
    },

    selectOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
  },
});

export const { setOrders, selectOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
