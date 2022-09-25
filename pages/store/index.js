import React, { useState } from "react";
import FilterProducts from "../../components/Filters/FilterProducts";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Products/Card/Card";
import { getItems } from "../../services/itemServices";
import styles from "../../styles/Store.module.css";

const Store = ({ products }) => {
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

  console.log(sportsTrue);

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

  const filterProducts = () => {
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

  let displayedProducts = filterProducts();

  return (
    <Layout title="Store">
      <h1>ALL PRODUCTS</h1>
      <section className={styles.container}>
        <div className={styles.filterProducts}>
          <FilterProducts
            products={products}
            priceFrom={priceFrom}
            priceTo={priceTo}
            sportsName={sportsName}
            onCheckboxClick={onCheckboxClick}
            onPriceInputChange={onPriceInputChange}
          />
        </div>
        {sportsTrue.length === 0 && (
          <div className={styles.displayedProducts}>
            <h3>Showing all products ({displayedProducts.length})</h3>
            <div className={styles.productsGrid}>
              {displayedProducts.map((el) => (
                <Card
                  key={el.id}
                  item={el}
                />
              ))}
            </div>
          </div>
        )}
        {sportsTrue.length > 0 && (
          <div className={styles.displayedProducts}>
            <h3>
              Showing products for sports{" "}
              {sportsTrue.map((sport) => (
                <span
                  style={{ textTransform: "capitalize" }}
                  key={sport}>{`"${sport}" `}</span>
              ))}
            </h3>
            <div className={styles.productsGrid}>
              {displayedProducts.map(
                (el) =>
                  filterToSports[el.sport] && (
                    <Card
                      key={el.id}
                      item={el}
                    />
                  )
              )}
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};
export default Store;

export async function getStaticProps() {
  const products = await getItems();

  return {
    props: {
      products,
    },
  };
}
