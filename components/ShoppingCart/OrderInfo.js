import { Button, Input, TextField } from "@mui/material";
import React from "react";
import styles from "./OrderInfo.module.css"

const OrderInfo = ({totalAmount, totalProducts}) => {
  return (
    <div className={styles.container}>
      <p className={styles.children}>Total products: <span className={styles.span}>{totalProducts}</span></p>
      <p className={styles.children} >Subtotal: <span className={styles.span}>$ {totalAmount}</span></p>
      <form className={styles.children}>
        <label htmlFor="discount">
          <p>Do you have a discount code?</p>
        </label>
        <Input
            sx={{m: "0 1rem 0 0"}}
          size="small"
          id="discount"
          name="discount"
          variant="standart"
          placeholder="Discount code"
        />
        <Button variant="outlined">Apply</Button>
      </form>
      <TextField
      sx={{marginTop: "1rem"}}
          label="Any special instruction?"
          multiline
          rows={4}
        />
      <br />
      <p className={styles.total}>Total <span className={styles.span}>$ {totalAmount}</span></p>
      <div className={styles.children}>
        <Button
        sx={{width: "100%"}}
          disableElevation
          variant="contained">
          Checkout
        </Button>
        <p>* Shipping cost calculated at checkout</p>
      </div>
    </div>
  );
};

export default OrderInfo;
