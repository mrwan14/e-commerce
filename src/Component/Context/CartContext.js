import { createContext, useEffect, useState } from "react";

export let CartContext = createContext(0);
export default function CartContextProvider(props) {
  let [ProductCountainer, setProductCountainer] = useState([]);
  let product = {
    name: "Kulangot",
    price: 99,
  };
  if (localStorage.getItem("myProducts") != null) {
    ProductCountainer = JSON.parse(localStorage.getItem("myProducts"));
  } else {
    ProductCountainer = [];
  }

  function addProduct() {
    ProductCountainer.push(product);
    localStorage.setItem("myProducts", JSON.stringify(ProductCountainer));
  }
  useEffect(() => {
    setProductCountainer(ProductCountainer);
  }, [ProductCountainer]);

  function CartDisplay() {
    let cartdisplay = document.getElementById("cartdisplay");
    cartdisplay.classList.replace("d-none", "d-flex");
    console.log("open");
  }
  function colse() {
    let cartdisplay = document.getElementById("cartdisplay");
    cartdisplay.classList.replace("d-flex", "d-none");
    console.log("close");
  }

  return (
    <CartContext.Provider
      value={{ addProduct, ProductCountainer, CartDisplay, colse }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
