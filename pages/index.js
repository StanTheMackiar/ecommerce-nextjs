import Image from "next/image";
import Layout from "../components/Layout/Layout";
import { getLatestItems } from "../services/itemServices";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Home({ products }) {
  const router = useRouter();

  return (
    <Layout title="Welcome">
      <h1>Welcome to Sports Store!</h1>

      <section className={styles.latestSection}>
        <h2>New products</h2>
        <div className={styles.latestGrid}>
          {products &&
            products.map((item) => (
              <div
                key={item.id}
                className={styles.latestItems}>
                <h3 className={styles.name}>{item.name}</h3>
                <Image
                  width={250}
                  height={250}
                  objectFit="contain"
                  src={item.img}
                  alt={item.alt}
                />
                <h4 className={styles.price}>{`$${item.price}.00`}</h4>
                <Button variant="outlined">Add to cart</Button>
              </div>
            ))}
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
