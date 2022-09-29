import { useState } from "react";
import Link from "next/link";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./ToggleMenu.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "./StyledComponents";
import { about, categories } from "./Items";
import SearchBar from "../HeaderTop/SearchBar";

const closeButtonStyles = {
  position: "absolute",
  right: "3px",
  top: "3px",
  color: "white",
  cursor: "pointer",
  backgroundColor: "rgb(30, 92, 185)",
  borderRadius: "50%",
  padding: "0.2rem",
  margin: "0.5rem",
};

const ToggleMenu = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (boolean) => setToggle(boolean);

  const list = () => (
    <Box
      sx={{ width: "350px", display: "flex", flexDirection: "column",  }}
      role="presentation">
      <CloseIcon
        sx={closeButtonStyles}
        onClick={() => handleToggle(false)}
      />

      <div className={styles.login}>
        <AccountCircleIcon sx={{ margin: "0.5rem", fontSize: "30px" }} />
        <Link href="/login">
          <a>
            <h3>Login</h3>
          </a>
        </Link>
      </div>

      <div className={styles.searchBar}>
      <SearchBar />
      </div>

      {categories.map((category) => (
        <Accordion
          key={category.name}
          sx={{ m: "0.5rem 1rem" }}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List
              component="nav"
              aria-label="categories">
              {category.type.map((el) => (
                <ListItemButton key={el.name + "list"}>
                  <Link href={el.url}>
                    <a>
                      <ListItemText primary={el.name} />
                    </a>
                  </Link>
                </ListItemButton>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      <List
        sx={{ m: "0.5rem 1rem" }}
        component="nav"
        aria-label="categories">
        {about.map((category) => (
          <ListItemButton key={category.name}>
            <Link href={category.url}>
              <a>
                <ListItemText
                  primary={category.name}
                  sx={{ color: "rgb(35, 112, 180)" }}
                />
              </a>
            </Link>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <div className={styles.container}>
      <MenuIcon
        sx={{
          fontSize: "30px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => handleToggle(true)}
      />
      <Drawer
        anchor="left"
        open={toggle}
        onClose={() => handleToggle(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default ToggleMenu;
