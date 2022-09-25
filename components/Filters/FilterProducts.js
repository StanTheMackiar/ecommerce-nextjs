import React from "react";

import styles from "./FilterProducts.module.css";
import FilterPrice  from "./FilterPrice";
import FilterSports from "./FilterSports";

export const FilterProducts = ({ priceFrom, priceTo, sportsName, onPriceInputChange, onCheckboxClick }) => {


  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Filters</h3>
      <FilterPrice
        priceFrom={priceFrom}
        priceTo={priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <FilterSports
        onCheckboxClick={onCheckboxClick}
        sportsName={sportsName}
      />
    </div>
  );
};

export default FilterProducts;
