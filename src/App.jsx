// App.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrders, selectOrder } from "./features/orders/ordersSlice";
import OrdersList from "./features/orders/OrdersList";
import OrderDetails from "./components/OrderDetails";
import sampleData from "./data/sampleOrders";

function App() {
  const dispatch = useDispatch();
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders"));
    if (data) {
      dispatch(setOrders(data));
    } else {
      localStorage.setItem("orders", JSON.stringify(sampleData));
      // dispatch(setOrders(sampleData));
      dispatch(setOrders(sampleData));
    }
  }, [dispatch]);

  return (
    <div className="container-fluid p-4">
      <h3 className="mb-4">Orders</h3>
      <div className="row">
        <div className="col-md-4">
          <OrdersList />
        </div>
        <div className="col-md-8">
          {selectedOrder ? (
            <OrderDetails />
          ) : (
            <p>Select an order to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
