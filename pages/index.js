import Layout from "../components/Layout/Layout";
import { getLatestItems } from "../services/itemServices";
import styles from "../styles/Home.module.css";
import Card from "../components/Products/Card/Card";
import { Button } from "@mui/material";

export default function Home({ products }) {

  return (
    <Layout title="Welcome">
      <h1>Welcome to Sports Store!</h1>
      <section className={styles.latestSection}>
        <h2>New products</h2>
        <div className={styles.latestGrid}>
          {products &&
            products.map((item) => (
              <Card item={item} key={item.name}/>
            ))}
        </div>
        <Button sx={{m: "1.2rem"}} variant="contained" disableElevation>Show more</Button>
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const products = await getLatestItems();

  return {
    props: {
      products,
    },
  };
}
