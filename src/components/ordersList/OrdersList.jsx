import { useSelector } from "react-redux";
import "./style.css";
import OrderItem from "../orderItem/OrderItem";
import { useState } from "react";

function OrdersList() {
  const { orders } = useSelector((store) => store.appReducer);
  const [filterValue, setFilterValue] = useState("");
  console.log(filterValue);
  return (
    <div id="products-container">
      <form onChange={(e) => setFilterValue(e.target.value)}>
        <label>
          <input type="radio" name="filter" value="" />
          All
        </label>
        <label>
          <input type="radio" name="filter" value="Pending" /> Pending
        </label>

        <label>
          <input type="radio" name="filter" value="Delivered" />
          Delivered
        </label>

        <label>
          <input type="radio" name="filter" value="Rejected" />
          Rejected
        </label>
      </form>
      <div id="products">
        {orders
          .filter((elt) =>
            filterValue === "Pending"
              ? elt.status === "Pending"
              : filterValue === "Delivered"
              ? elt.status === "Delivered"
              : filterValue === "Rejected"
              ? elt.status === "Rejected"
              : elt
          )
          .map((order, i) => (
            <OrderItem key={i} {...order} />
          ))}
      </div>
    </div>
  );
}

export default OrdersList;
