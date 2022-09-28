import { useRouter } from "next/router";
import { createContext, useState } from "react";

const filtersContext = createContext();

const FiltersProvider = ({ children }) => {
  const router = useRouter();

  const [price, setPrice] = useState({ priceFrom: "", priceTo: "" });
  const [results, setResults] = useState([]);
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

  const handleSearch = (e) => {
    const search = e.target.value;
    if (search.length > 0) {
      if (e.keyCode === 13) {
        return router.push(`/search?q=${search}`);
      }
      fetch(`/api/search?q=${search}`)
        .then((res) => res.json())
        .then((searchResults) => {
          setResults(searchResults);
        });
    } else setResults([]);
  };

  const handleListClick = (e) => {
    setResults([])
  }

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
    setPrice,
    handleSearch,
    results,
    setResults,
    handleListClick,
  };

  return (
    <filtersContext.Provider value={data}>{children}</filtersContext.Provider>
  );
};

export { FiltersProvider };
export default filtersContext;
