import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const ViewOrderDetail = () => {
  const firebase = useFirebase();
  const params = useParams();
  console.log(params);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    firebase.getOrders(params.bookId).then((orders) => setOrders(orders.docs));
  }, [firebase]);

  return (
    <div className="container">
      <h1>Orders</h1>
      <div>
        {orders.map((order) => {
          const data = order.data();
          return (
            <div
              className="mt-5"
              style={{ border: "1px solid", padding: "15px" }}
            >
              <h5>Order By: {data.name}</h5>
              <h6>Qty: {data.qty}</h6>
              <p>Email: {data.userEmail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewOrderDetail;
