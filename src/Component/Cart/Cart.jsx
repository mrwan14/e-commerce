import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "../Home/home.css";

export default function Cart(props) {
  let { ProductCountainer, CartDisplay } = useContext(CartContext);

  return (
    <div>
      {ProductCountainer.length > 0 ? (
        <button
          className="btn  text-danger"
          onClick={CartDisplay}
          onClickCapture
          type="submit"
        >
          {" "}
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      ) : (
        <button className="btn" onClick={CartDisplay} type="submit">
          {" "}
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      )}
    </div>
  );
}
