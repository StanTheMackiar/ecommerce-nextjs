import React, { useContext } from "react";
import styles from "./HeaderTop.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Button } from "@mui/material";
import shoppingContext from "../../../../src/context/shoppingContext";

const Cart = () => {
  const { openCart, cart, totalProducts } = useContext(shoppingContext);

  return (
    <section className={styles.containerRight}>
      <nav className={styles.nav}>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/login">
          <a className={styles.link}>
            <Button
              variant="contained"
              disableElevation>
              Login
            </Button>
          </a>
        </Link>
      </nav>

      <div className={styles.cart}>
        <Link href="/cart">
          <a>
            <ShoppingCartIcon />
          </a>
          </Link>
          <span className={styles.numberCart}>{totalProducts}</span>
        
      </div>
    </section>
  );
};

export default Cart;
