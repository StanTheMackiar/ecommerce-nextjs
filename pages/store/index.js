import { useContext } from "react";
import FilterProducts from "../../components/Filters/FilterProducts";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Products/Card/Card";
import AddToCartModal from "../../components/ShoppingCart/AddToCartModal";
import { getItems } from "../../services/itemServices";
import filtersContext from "../../src/context/filtersContext";
import modalContext from "../../src/context/modalContext";
import shoppingContext from "../../src/context/shoppingContext";
import styles from "../../styles/Store.module.css";

const Store = ({ products }) => {
  const { filterProducts, sportsTrue, filterToSports } =
    useContext(filtersContext);

  const { handleOpen, handleClose, open } = useContext(modalContext);
  const { addToCart } = useContext(shoppingContext);

  let displayedProducts = filterProducts(products);

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
                <>
                  <AddToCartModal
                    handleClose={handleClose}
                    open={open}
                    item={el}
                  />
                  <Card
                    key={el.id}
                    item={el}
                  />
                </>
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
