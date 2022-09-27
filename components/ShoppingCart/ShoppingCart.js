import { Button } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import shoppingContext from "../../src/context/shoppingContext";
import CartItem from "./CartItem";
import OrderInfo from "./OrderInfo";
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const {
    cart,
    totalAmount,
    totalProducts,
    clearCart,
  } = useContext(shoppingContext);

  return (
    <div className={styles.container}>
      {cart.length > 0 ? (
        <article>
          <header className={styles.title}>
            <h1>My Shopping Cart</h1>
          </header>
          <section className={styles.cart}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                products={item}
              />
            ))}
            <Button
              variant="outlined"
              onClick={clearCart}>
              Clear Cart
            </Button>
          </section>

          <OrderInfo
            totalProducts={totalProducts}
            totalAmount={totalAmount}
          />
        </article>
      ) : (
        <article>
          <h3>Cart is empty</h3>
          <Link href="/store">
            <a>
              <Button variant="contained">Go to store</Button>
            </a>
          </Link>
        </article>
      )}
    </div>
  );
};

export default ShoppingCart;
