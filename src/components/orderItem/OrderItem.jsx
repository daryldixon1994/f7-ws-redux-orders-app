/*eslint-disable */
import "./style.css";
import { CiClock1 } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaWindowClose } from "react-icons/fa";

function OrderItem({ product, customer, status, total }) {
  return (
    <div>
      {status === "Delivered" ? (
        <LiaShippingFastSolid color="#1ed760" size={20} />
      ) : status === "Rejected" ? (
        <FaWindowClose color="#f42c43" size={20} />
      ) : (
        <CiClock1 color="#5472d4" size={20} />
      )}
      <div id="order-item">
        <h6>Product Name</h6>
        <h6>Price</h6>
        <h6>Quantity</h6>
        <h5> {product.name} </h5>
        <h5> {product.price} TND </h5>
        <h5> {product.qte} </h5>
        <h6>Customer Name</h6>
        <h6>Phone number</h6>
        <h6>Address</h6>
        <h5> {customer.name} </h5>
        <h5> {customer.phone} </h5>
        <h5> {customer.address} </h5>
      </div>
    </div>
  );
}

export default OrderItem;
