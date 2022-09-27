import React, { useContext } from "react";

import styles from "./FilterProducts.module.css";
import FilterPrice  from "./FilterPrice";
import FilterSports from "./FilterSports";
import filtersContext from "../../src/context/filtersContext";

export const FilterProducts = () => {

  const { priceFrom, priceTo, sportsName, onPriceInputChange, onCheckboxClick } = useContext(filtersContext)

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
