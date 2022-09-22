import Link from "next/link";
import styles from "./NavMenu.module.css";
import SearchBar from "../HeaderTop/SearchBar";
import { useState } from "react";
import { categories } from "../ToggleMenu/Items";
import { Fade, ListItemButton } from "@mui/material";


const NavMenu = () => {

  const [toggle, setToggle] = useState({
    id: "",
    state: false,
  });

  const handleToggle = (id, state) => {
    setToggle({
      ...toggle,
      id,
      state,
    });
  };

  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        {categories.map((category, index) => (
          <div
            key={index + "nav"}
            onMouseOver={() => handleToggle(index, true)}
            onMouseOut={() => handleToggle(index, false)}>
            <div className={styles.category}>
              <span>{category.name}</span>
            </div>

            <Fade
              in={Boolean(toggle.state) && toggle.id === index}
              timeout={400}
              >
              <nav className={styles.list}>
                {category.type.map((el) => (
                    <Link
                      href={el.url}
                      key={el.name + "list"}>
                      <a>
                        <ListItemButton>
                          <span className={styles.listElement}>{el.name}</span>
                        </ListItemButton>
                      </a>
                    </Link>
                  ))}
              </nav>
              </Fade>
          </div>
        ))}
      </nav>

      <div className={styles.searchBar}>
        <SearchBar
          color={"gray"}
          className={styles.searchBar}
        />
      </div>
    </section>
  );
};

export default NavMenu;
