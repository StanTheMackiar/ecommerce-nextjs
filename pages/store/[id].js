import React from 'react'
import Layout from '../../components/Layout/Layout'
import PageProduct from '../../components/Products/PageProduct/PageProduct'
import { getItemData, getPathsFromIDs } from '../../lib/utils'


export default function ProductPage ({product}) {

    
  return (
    <Layout title={`${product.name}`}>
        <PageProduct item={product}/>
    </Layout>
  )
}


export async function getStaticPaths() {
    const paths = await getPathsFromIDs();

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const product = await getItemData(id);

    return {
        props: {
            product,
        }
    }
}