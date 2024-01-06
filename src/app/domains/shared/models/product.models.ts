export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: any,
    images: string[],
    date?: string
}