import TitleAndSearch from "./TitleAndSearch";
import Cart from "./Cart";
import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <section className={styles.headerTop}>
      <TitleAndSearch />
      <Cart />
    </section>
  );
};

export default HeaderTop;
