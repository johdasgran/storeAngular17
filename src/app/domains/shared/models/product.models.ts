export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: {
        id: number,
        title: string,
        image: string,
        creationAt: string,
        updatedAt: string
    },
    images: string[],
    creationAt: string
}