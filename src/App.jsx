// App.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrders, selectOrder } from "./features/orders/ordersSlice";
import OrdersList from "./features/orders/OrdersList";
import OrderDetails from "./components/OrderDetails";
import OrderFilter from "./components/OrderFilter";
import sampleData from "./data/sampleOrders";
import "./App.css";
import photo from "../src/assets/img/profile/photo.jpeg";
import toast from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders.orders); //  fetch all orders
  const selectedOrder = useSelector((state) => state.orders.selectedOrder);  // fetch selected order

  const [filteredOrders, setFilteredOrders] = useState([]);

useEffect(() => {
  dispatch(setOrders(sampleData)); // Always load fresh data from JS file
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
    <div className="container-fluid">
      <div className="row order-details py-3 text-center text-lg-start">
          <div className="col-lg-6 ">
            <h3 className="mb-0">Orders</h3>
            <p>Manage All Your Orders Here</p>
          </div>
          <div className="col-lg-6 text-lg-end pb-4">
            
            <button className="btn btn-01 me-3"  onClick={() => toast.error("Functanility is not yet created")}>
              <i className="bi bi-pencil-square pe-2"></i>View Drafts
            </button>

            <button className="btn btn-01 me-3"  onClick={() => toast.error("Functanility is not yet created")}>
              <i className="bi bi-download pe-2"></i>Export csv
            </button>
            <button className="btn btn-primary mt-3 mt-lg-0" onClick={() => toast.error("Functanility is not yet created")}>
              <i className="bi bi-plus-lg pe-2" ></i>Create new Order 
            </button>
          </div>
        </div>

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
