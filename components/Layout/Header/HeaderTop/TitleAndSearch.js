import React from "react";
import SearchBar from "./SearchBar";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import styles from "./HeaderTop.module.css";
import Link from "next/link";

const TitleAndSearch = () => {
  return (
    <section className={styles.containerLeft}>
      <div className={styles.toggle}>
        <ToggleMenu />
      </div>

      <div className={styles.title}>
        <Link href="/">
          <a className={styles.link}>
            <h1 className={styles.h1}>Sports Store</h1>
          </a>
        </Link>
      </div>

      <div className={styles.searchBar}>
        <SearchBar className={styles.searchBar} />
      </div>
    </section>
  );
};

export default TitleAndSearch;
