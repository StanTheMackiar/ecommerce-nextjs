import HeaderTop from "./HeaderTop/HeaderTop";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <HeaderTop />
    </header>
  );
};

export default Header;
