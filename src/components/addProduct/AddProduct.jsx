import { useRef, useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    status: "Pending",
  });
  // console.log("newProduct:", newProduct);
  const dispatch = useDispatch();
  const formRef = useRef();
  const updateState = (cb) => {
    setNewProduct({
      ...newProduct,
      id: uuidv4(),
      total: newProduct.product.price * newProduct.product.qte,
    });
    cb();
  };
  const handleAddNewProduct = () => {
    updateState(() => {
      dispatch({ type: "ADD_NEW_PRODUCT", payload: newProduct });
    });
    formRef.current.reset();
  };
  return (
    <div id="main-form">
      <form
        onChange={(e) =>
          setNewProduct({
            ...newProduct,
            product: { ...newProduct.product, [e.target.name]: e.target.value },
          })
        }
        ref={formRef}
      >
        <input placeholder="Product name" name="name" />
        <input name="price" placeholder="Price" />
        <input name="qte" type="number" placeholder="Quantity" />
      </form>
      <form
        onChange={(e) =>
          setNewProduct({
            ...newProduct,

            customer: {
              ...newProduct.customer,
              [e.target.name]: e.target.value,
            },
          })
        }
        ref={formRef}
      >
        <input name="name" placeholder="Customer name" />
        <input name="phone" placeholder="Phone" />
        <input name="address" placeholder="Address" />
      </form>
      <button onClick={handleAddNewProduct}>Add</button>
    </div>
  );
}

export default AddProduct;
