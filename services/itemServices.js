import inventary from '../src/products/inventary.json'


export async function getItems(){
    const products = inventary;
    return products
} 

export async function getLatestItems() {
    const products = await getItems();
    return products.slice(0, 4);
}
