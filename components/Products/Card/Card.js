import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { convertToPath } from "../../../lib/utils";
import styles from "./Card.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import shoppingContext from "../../../src/context/shoppingContext";

const Card = ({ item }) => {
  const { addToCart } = useContext(shoppingContext);


  return (
    <div
      key={item.id}
      className={styles.latestItems}>
      <Link href={`/store/${convertToPath(item.name)}`}>
        <a>
          <Image
            width={150}
            height={150}
            objectFit="contain"
            src={item.img}
            alt={item.alt}
          />
          <h3 className={styles.name}>{item.name}</h3>
          <h4 className={styles.price}>{`$ ${item.price}`}</h4>
        </a>
      </Link>
      <Button
        onClick={() =>  addToCart(item.id)}
        variant="outlined"
        endIcon={<AddShoppingCartIcon />}>
        ADD
      </Button>
    </div>
  );
};

export default Card;
