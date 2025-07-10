// features/orders/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // hold all order from json
  selectedOrder: null, // hold only selected order (Active order)
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,

  // modify state by action
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload;
      if (action.payload.length > 0) {
        state.selectedOrder = action.payload[0]; // 1st order is selected
      }
    },

    // when user click on side bar orders it will update orderdetails in rightside
    selectOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
  },
});

export const { setOrders, selectOrder } = ordersSlice.actions; // action dispatched
export default ordersSlice.reducer;
