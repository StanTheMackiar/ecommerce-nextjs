



export async function getItems(){
    const products = await fetch('http://localhost:3000/api/products').then(res => res.json())
    return products
} 

export async function getLatestItems() {
    const products = await getItems();
    return products.slice(0, 4);
}