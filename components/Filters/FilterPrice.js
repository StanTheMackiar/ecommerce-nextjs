import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import styles from "./FilterPrice.module.css";

const FilterPrice = ({ priceFrom, priceTo, onPriceInputChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.children}>
      <FormControl  sx={{ m: 1 }}>
          <InputLabel htmlFor="priceFrom"><strong>Price From</strong></InputLabel>
          <OutlinedInput
            id="priceFrom"
            type="number"
            min="0"
            name="priceFrom"
            value={priceFrom}
            onChange={(e) => onPriceInputChange(e.target.name, e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="priceFrom"
          />
        </FormControl>
      </div>
      <div className={styles.children}>
      <FormControl  sx={{ m: 1 }}>
          <InputLabel htmlFor="priceTo"><strong>Price To</strong></InputLabel>
          <OutlinedInput
            id="priceTo"
            type="number"
            min="0"
            name="priceTo"
            value={priceTo}
            onChange={(e) => onPriceInputChange(e.target.name, e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="priceTo"
          />
      </FormControl>
    </div>
    </div>
  );
};

export default FilterPrice;
