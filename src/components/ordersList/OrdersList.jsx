import { useSelector } from "react-redux";
import "./style.css";
import OrderItem from "../orderItem/OrderItem";

function OrdersList() {
  const { orders } = useSelector((store) => store.appReducer);
  return (
    <div id="products">
      {orders.map((order, i) => (
        <OrderItem key={i} {...order} />
      ))}
    </div>
  );
}

export default OrdersList;
