import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { convertToPath } from "../../../lib/utils";
import styles from "./Card.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Card = ({ item }) => {
  return (
    <Link href={`/store/${convertToPath(item.name)}`}>
      <a>
        <div
          key={item.id}
          className={styles.latestItems}>
          <Image
            width={150}
            height={150}
            objectFit="contain"
            src={item.img}
            alt={item.alt}
          />
          <h3 className={styles.name}>{item.name}</h3>
          <h4 className={styles.price}>{`$${item.price}.00`}</h4>
          <Button variant="outlined" endIcon={<AddShoppingCartIcon />}>ADD</Button>
        </div>
      </a>
    </Link>
  );
};

export default Card;
