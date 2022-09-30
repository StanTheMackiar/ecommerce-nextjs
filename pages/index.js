import Layout from "../components/Layout/Layout";
import { getLatestItems } from "../services/itemServices";
import styles from "../styles/Home.module.css";
import Card from "../components/Products/Card/Card";
import { Button } from "@mui/material";
import Image from "next/image"
import gif from "../public/img/gif.gif"


export default function Home({ products }) {
  return (
    <Layout title="Welcome">
      <h1 className={styles.title}>
        Welcome to the best <strong>Sport Store!</strong>
      </h1>

      <section className={styles.banner}>
        <div className={styles.bannerInfo}>
          <h2>Welcome to Sports Store!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.latestSection}>
          <h2>New products</h2>
          <div className={styles.latestGrid}>
            {products &&
              products.map((item) => (
                <Card
                  item={item}
                  key={item.name}
                  tag={true}
                />
              ))}
          </div>

          <Button
            sx={{ m: "1.2rem" }}
            variant="contained"
            disableElevation>
            Show more
          </Button>
        </div>

        <div className={styles.imageSection}>
          <h2 className={styles.subtitle}>There are no limits!</h2>
          <div className={styles.image}>
            <Image
              alt="No limits gif"
              width={350}
              height={400}
              src={gif}
              objectFit="contain"
            />
          </div>
        </div>
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
