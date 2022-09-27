import { createContext, useState } from "react";

const filtersContext = createContext();

const FiltersProvider = ({children}) => {
    const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });

  const { priceFrom, priceTo } = price;

  const [filterToSports, setFilterToSports] = useState({
    basket: false,
    ciclyng: false,
    soccer: false,
    voley: false,
    fitness: false,
  });

  const sportsName = Object.keys(filterToSports);

  let sportsTrue = [];
  sportsName.map((sport) => filterToSports[sport] && sportsTrue.push(sport));


  const onPriceInputChange = (name, value) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const onCheckboxClick = (name, checked) => {
    setFilterToSports({
      ...filterToSports,
      [name]: checked,
    });
  };

  const filterProducts = (products) => {
    if (priceFrom < 0 && priceTo < 0) return products;
    if (priceFrom && !priceTo)
      return products.filter((product) => product.price >= priceFrom);
    if (!priceFrom && priceTo)
      return products.filter((product) => product.price <= priceTo);
    if (priceFrom && priceTo)
      return products.filter(
        (products) => products.price >= priceFrom && products.price <= priceTo
      );

    return products;
  };



    const data = {
        filterProducts,
        onCheckboxClick,
        onPriceInputChange,
        sportsTrue,
        sportsName,
        filterToSports,
        setFilterToSports,
        priceFrom,
        priceTo,
        price,
        setPrice
    }

    return (
        <filtersContext.Provider value={data}>{children}</filtersContext.Provider>
    )
}

export { FiltersProvider }
export default filtersContext