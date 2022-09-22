import Link from "next/link";
import styles from "./NavMenu.module.css";
import SearchBar from "../HeaderTop/SearchBar";

const NavMenu = () => {
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/tennis">
          <a className={styles.link}>Sports</a>
        </Link>
        <Link href="/soccer">
          <a className={styles.link}>Men</a>
        </Link>
        <Link href="/basket">
          <a className={styles.link}>Women</a>
        </Link>
        <Link href="/running">
          <a className={styles.link}>Accesories</a>
        </Link>
      </nav>

      <div className={styles.searchBar}>
        <SearchBar color={"gray"}
        className={styles.searchBar} />
      </div>
    </section>
  );
};

export default NavMenu;
