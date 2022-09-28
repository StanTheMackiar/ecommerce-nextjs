import { Button } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import shoppingContext from "../../src/context/shoppingContext";
import CartItem, { primaryColor } from "./CartItem";
import OrderInfo from "./OrderInfo";
import styles from "./ShoppingCart.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
            size="large"
            className={styles.buttons}
            variant="outlined"
            onClick={() => delAllFromCart(id)}
            startIcon={<DeleteForeverIcon sx={primaryColor} />}>
            Clean Cart
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
