import { getItems } from "../services/itemServices";

export async function getPathsFromIDs() {
    const products = await getItems();

    const ids = products.map(item => {
        return {
            params: {
                id: convertToPath(item.name),
            },
        };
    });

    return ids;
}

export async function getItemData(id) {
    const products = await getItems();

    return products.find(item => convertToPath(item.name) === id)
}


export function convertToPath(name) {
    return name.toLowerCase().replace(/\s/g, "-")
}

export function toCapitalCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}