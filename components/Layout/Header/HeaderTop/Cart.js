import React from "react";
import styles from "./HeaderTop.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <section className={styles.containerRight}>
      <nav className={styles.nav}>
        <Link href="/help">
          <a className={styles.link}>Help</a>
        </Link>
        <Link href="/store">
          <a className={styles.link}><Button variant="contained" disableElevation>Login</Button></a>
        </Link>
      </nav>

      <div className={styles.cart}>
        <ShoppingCartIcon />
      </div>

    </section>
  );
};

export default Cart;
