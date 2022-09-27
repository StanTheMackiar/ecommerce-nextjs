import { Button, Rating } from "@mui/material";
import Image from "next/image";
import React, { useState, useContext } from "react";
import styles from "./PageProduct.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import shoppingContext from "../../../src/context/shoppingContext";
import modalContext from "../../../src/context/modalContext";
import AddToCartModal from "../../ShoppingCart/AddToCartModal";

const PageProduct = ({ item }) => {
  const [value, setValue] = useState(0);

  const { open, handleClose, handleOpen } = useContext(modalContext);
  const { addToCart } = useContext(shoppingContext);


  const handleButton = (item) => {
    addToCart(item.id);
    handleOpen();
  };

  return (
    <>
      <AddToCartModal
        handleClose={handleClose}
        open={open}
        item={item}
      />

      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            width={400}
            height={400}
            objectFit="contain"
            src={item.img}
            alt={item.alt}
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{item.name}</h2>
          <h4 className={styles.price}>${item.price}.00</h4>
          <h4 className={styles.subtitle}>Description</h4>
          <p className={styles.description}>{item.description}</p>

          <Button
            onClick={() => handleButton(item)}
            sx={{ p: "1rem" }}
            variant="contained"
            disableElevation
            endIcon={<AddShoppingCartIcon />}>
            ADD TO CART
          </Button>
          <div>
            <p style={{ margin: "0.5rem" }}>Rate this product:</p>
            <Rating
              name="simple-controlled"
              precision={0.5}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PageProduct;
