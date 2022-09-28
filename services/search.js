import algoliasearch from "algoliasearch";

const client = algoliasearch("F734215PWM", "00f514f38ccf20027c44f3cf6f7f830c");
const index = client.initIndex("Inventary_Sport_Store");

  export const search = async ({query}) => {
    const { hits } = await index.search(query, {
        attributesToRetrieve: ["id", "name", "img", "alt", "price", "type", "sport"],
        hitsPerPage: 10,
      });
      return { results: hits }
  }