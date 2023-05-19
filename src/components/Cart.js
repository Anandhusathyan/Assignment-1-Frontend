import { CartProvider, useCart } from "react-use-cart";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Buy from "./Paybutton"
import { useState } from "react";

let price = 0;

function Cart() {


  const [showbuy, setshowbuy] = useState(false)

  const navigate = useNavigate();
  function buy() {
    navigate('/buy')
  }
  ;
  let arr = [];
  
  function sum(itemprice) {

    let sum = 0;
    arr.push(itemprice);
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
    price = sum;
  }
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();


  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    showbuy?<Buy  Price={price} />
    : <>
    <h1>Cart ({totalUniqueItems})</h1>

    <ul>
      {console.log("items", items)}
      {console.log(process.env.REACT_APP_RAZORPAY_API_KEY)}
      {items.map((item) => (
        <li key={item.id} add={sum(item.itemTotal)}>
          <img src={item.image} id="cartimage" />
          {item.quantity} x {item.name} &mdash;
          <button className="cart"
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <button className="cart"
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
          <button onClick={() => removeItem(item.id)}> &times; </button>

        </li>
      ))}
      <button onClick={()=>{
        setshowbuy(true)
      }}>buy</button>
      {console.log("price",price)}
    </ul>
  </>
  );
}
export default Cart;