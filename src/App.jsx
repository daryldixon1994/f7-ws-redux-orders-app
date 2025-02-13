import AddProduct from "./components/addProduct/AddProduct";
import "./App.css";
import OrdersList from "./components/OrdersList/OrdersList";
function App() {
  return (
    <div id="app">
      <AddProduct />
      <OrdersList />
    </div>
  );
}

export default App;
