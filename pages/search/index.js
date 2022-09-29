import React from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Products/Card/Card";
import { search } from "../../services/search";
import styles from "../../styles/Search.module.css";

const Search = ({ query, results }) => {
  return (
    <Layout title={`Results for ${query}`}>
      {results.length ? (
        <h3>
          Showing {results.length} results for{" "}
          <span className={styles.span}>{query}</span>
        </h3>
      ) : (
        <h3>
          No products for <span className={styles.span}>{query}</span>
        </h3>
      )}

      <div className={styles.container}>
        {results.map((item) => {
          return (
            <Card
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { query } = context;
  const { q = "" } = query;
  console.log(q);

  const { results } = await search({ query: q });

  return {
    props: {
      query: q,
      results,
    },
  };
}
