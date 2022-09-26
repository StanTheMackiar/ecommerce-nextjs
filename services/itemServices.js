import { productsList } from "../pages/api/products";


export async function getItems(){
    const products = productsList;
    return products
} 

export async function getLatestItems() {
    const products = await getItems();
    return products.slice(0, 4);
}
