import React, { useContext } from "react";
import shoppingContext from "../../src/context/shoppingContext";
import styles from "./CartItem.module.css";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const primaryColor = {
  color: "rgb(35, 112, 228)",
};

const CartItem = ({ products }) => {
  const { delFromCart, delAllFromCart, addFromCart } =
    useContext(shoppingContext);

  let { name, price, amount, id, img, alt } = products;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={img}
          width={100}
          height={100}
          objectFit="contain"
          alt={alt}
        />
      </div>
      <div className={styles.subcontainer}>
        <div>
          <h4 className={styles.title}>{name}</h4>
          <p>
            $ {price} x {amount} ={" "}
            <strong style={{ color: "gray" }}>$ {price * amount}</strong>
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <IconButton onClick={() => addFromCart(id)}>
            <AddIcon className={styles.buttons} sx={primaryColor} />
          </IconButton>
          <IconButton onClick={() => delFromCart(id)}>
            <RemoveIcon  className={styles.buttons} sx={primaryColor} />
          </IconButton>
          <Button
            size="small"
            className={styles.buttons}
            variant="outlined"
            onClick={() => delAllFromCart(id)}
            startIcon={<DeleteForeverIcon sx={primaryColor} />}>
            Remove All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
