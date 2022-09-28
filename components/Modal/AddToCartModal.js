import { Button, Fade, IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import shoppingContext from "../../src/context/shoppingContext";
import Link from "next/link";
import { primaryColor } from "../ShoppingCart/CartItem";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 380,
  padding: "2rem",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "0.5rem",
  boxShadow: 24,
  outline: "none",
};

const AddToCartModal = ({ handleClose, open, item }) => {


  const { cart, addFromCart, delFromCart } = useContext(shoppingContext)


  const getProductInCart = () => {
    return cart.find(el => el.id === item.id)
  }

  let productInCart = getProductInCart();

  return (
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
          <h2 style={primaryColor}>Product added!</h2>
          <h3>{item.name}</h3>
          <Image
            width={100}
            height={100}
            objectFit="contain"
            alt={item.alt}
            src={item.img}
          />
          <div>
            <IconButton onClick={() => addFromCart(item.id)}>
              <AddIcon sx={primaryColor} />
            </IconButton>
            <IconButton onClick={() => delFromCart(item.id)}>
              <RemoveIcon sx={primaryColor} />
            </IconButton>
          </div>
          <p>Amount: {productInCart && productInCart.amount}</p>

          <Button
            sx={{ m: "0.2rem" }}
            variant="outlined"
            onClick={handleClose}>
            Keep buying
          </Button>
          <Link href='/cart'>
          <a>
          <Button
          onClick={handleClose}
            sx={{ m: "0.2rem" }}
            variant="contained"
            disableElevation>
            Show Cart
          </Button>
          </a>
          </Link>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddToCartModal;
