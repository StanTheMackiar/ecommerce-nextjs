import { useContext } from "react";
import FilterProducts from "../../components/Filters/FilterProducts";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Products/Card/Card";
import { getItems } from "../../services/itemServices";
import filtersContext from "../../src/context/filtersContext";
import styles from "../../styles/Store.module.css";

const Store = ({ products }) => {
  const { filterProducts, sportsTrue, filterToSports, filterSearch } =
    useContext(filtersContext);

  let searchResults =  filterSearch(products)
  let filterResults = filterProducts(products);

  const displayedProducts = [...new Set([ 
    ...searchResults,
    ...filterResults,
  ])];

  return (
    <Layout title="Store">
      <h1>ALL PRODUCTS</h1>
      <section className={styles.container}>
        <div className={styles.filterProducts}>
          <FilterProducts />
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
