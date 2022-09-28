import HeaderTop from "./HeaderTop/HeaderTop";
import NavMenu from "./NavMenu/NavMenu";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <HeaderTop />
    </header>
  );
};

export default Header;
