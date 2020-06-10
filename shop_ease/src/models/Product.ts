import { Brand } from "./Brand";

export class Product {
    product_code: string;
    name: string;
    brand: Brand;
    category: string;
    price: number;
    description: string;
    short_desc: string;
    specs: string[];
    imageUrls: string[];
}