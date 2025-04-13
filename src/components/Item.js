import React from "react";
import { useState } from "react";
function Item({ name, category }) {

  const [cart, setCart] = useState(false);

  function handleCart (){
    setCart(incart => !incart);
  }
  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? "remove" : "add"} onClick={handleCart}>{cart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
