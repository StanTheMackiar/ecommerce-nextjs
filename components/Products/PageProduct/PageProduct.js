import { Box, Button, Fade, Modal, Rating } from "@mui/material";
import Image from "next/image";
import React, { useState, useContext } from "react";
import styles from "./PageProduct.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Backdrop from "@mui/material/Backdrop";
import shoppingContext from '../../../src/context/shoppingContext'

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 380,
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  boxShadow: 24,
  outline: "none",
};

const PageProduct = ({ item }) => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addToCart } = useContext(shoppingContext)

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <Box sx={styleModal}>
            <Image
              width={600}
              height={600}
              objectFit="contain"
              src={item.img}
              alt={item.alt}
            />
          </Box>
        </Fade>
      </Modal>

      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            onClick={handleOpen}
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
            onClick={() => addToCart(item.id)}
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
