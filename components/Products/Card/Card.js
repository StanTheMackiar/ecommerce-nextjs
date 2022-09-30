import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "../../../lib/utils";
import styles from "./Card.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useContext, useState } from "react";
import AddToCartModal from "../../Modal/AddToCartModal";
import shoppingContext from "../../../src/context/shoppingContext";

const Card = ({ item, tag = false }) => {
  const { addToCart } = useContext(shoppingContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleButton = (item) => {
    addToCart(item.id);
    handleOpen();
  };
  return (
    <>
      <AddToCartModal
        item={item}
        handleClose={handleClose}
        open={open}
      />
      <div
        key={item.id}
        className={styles.latestItems}>
        <Link href={`/store/${convertToPath(item.name)}`}>
          <a>
            {tag && (
              <div className={styles.tag}>
                <Image
                  width={35}
                  height={35}
                  alt="new tag"
                  src="/img/new.png"
                />
              </div>
            )}
            <div className={styles.image}>
              <Image
                width={140}
                height={140}
                objectFit="contain"
                src={item.img}
                alt={item.alt}
              />
            </div>
            <h3 className={styles.name}>{item.name}</h3>
            <h4 className={styles.price}>{`$ ${item.price}`}</h4>
          </a>
        </Link>
        <Button
          onClick={() => handleButton(item)}
          variant="outlined"
          size="small"
          endIcon={<AddShoppingCartIcon />}>
          ADD
        </Button>
      </div>
    </>
  );
};

export default Card;
