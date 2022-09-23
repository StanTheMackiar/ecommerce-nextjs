import React from 'react'
import Layout from '../../components/Layout/Layout'
import Card from '../../components/Products/Card/Card'
import { getItems } from '../../services/itemServices'
import styles from "../../styles/Home.module.css";

const Store = ({products}) => {
  return (
    <Layout title='Store'>
      <h1>All Products</h1>
      <section className={styles.latestGrid}>
        {
          products.map(el => (
            <Card key={el.id} item={el}/>
          ))
        }
        </section>
    </Layout>
  )
}
export default Store

export async function getStaticProps() {
  const products = await getItems();
  

  return {
    props: {
      products,
    }
  }
}