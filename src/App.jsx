// App.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrders, selectOrder } from "./features/orders/ordersSlice";
import OrdersList from "./features/orders/OrdersList";
import OrderDetails from "./components/OrderDetails";
import OrderFilter from "./components/OrderFilter";
import sampleData from "./data/sampleOrders";
import "./App.css";
import photo from "../public/img/profile/photo.jpeg";

function App() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders.orders);
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);

  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("orders"));
    if (data) {
      dispatch(setOrders(data));
    } else {
      localStorage.setItem("orders", JSON.stringify(sampleData));
      dispatch(setOrders(sampleData));
    }
  }, [dispatch]);

  // Set default filtered orders when allOrders change
  useEffect(() => {
    setFilteredOrders(allOrders);
  }, [allOrders]);

  // Callback from OrderFilter
  const handleFilter = ({ searchId, company, status }) => {
    let result = allOrders;

    if (searchId) {
      result = result.filter((o) =>
        o.id.toLowerCase().includes(searchId.toLowerCase())
      );
    }
    if (company) {
      result = result.filter((o) => o.company === company);
    }
    if (status) {
      result = result.filter((o) => o.status === status);
    }

    setFilteredOrders(result);
  };

  return (
    <div className="container-fluid p-4">
      <h3 className="mb-4">Orders</h3>

      {/* 🔍 Filter Component Above Both Sections */}
      <OrderFilter orders={allOrders} onFilter={handleFilter} />

      <div className="row mt-4">
        <div className="col-md-3">
          <OrdersList orders={filteredOrders} />
        </div>
        <div className="col-md-9">
          {selectedOrder ? (
            <OrderDetails photo={photo} />
          ) : (
            <p>Select an order to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
