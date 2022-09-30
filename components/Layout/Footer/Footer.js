import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";

const Footer = () => {
  const iconsStyle = {
    color: "rgb(35, 112, 228)",
    fontSize: "40px",
    margin: "0.5rem",
    cursor: "pointer",
  };

  return (
    <footer className={styles.container}>
      <div className={styles.firstRow}>
        <p>Follow us</p>
        <FacebookIcon sx={iconsStyle} />
        <TwitterIcon sx={iconsStyle} />
        <InstagramIcon sx={iconsStyle} />
        <YouTubeIcon sx={iconsStyle} />
      </div>

      <div className={styles.secondRow}>
        <div className={styles.contactElements}>
        <EmailIcon sx={{margin: "0.5rem"}}/>
        <p>ecommerce.sport@store.com</p>
        </div>
        <div className={styles.contactElements}>
        <BusinessIcon sx={{margin: "0.5rem"}}/>
        <p>NIT 900784756-1</p>
        </div>
        <div className={styles.contactElements}>
        <PhoneIcon sx={{margin: "0.5rem"}}/>
        <p> 01-8000-2245</p>
        </div>
      </div>

      <div className={styles.thirdRow}>
        <p>© 2022 Sport Store™ Colombia SAS.</p>
      </div>
    </footer>
  );
};

export default Footer;
