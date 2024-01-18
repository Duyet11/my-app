import { Category } from './Category';
export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  };

export type ProductAdmin = Omit<Product, 'id' | 'category' | 'rate'> & {
  _id: string;
  category: Category;
  rate: number;
}
export type ProductAdd = Omit<Product, 'id' | 'rating'> & {
  rate: number;
};
// export type ApiProduct = Omit<Product, 'id' | 'rating'> & {
//   _id: string;
//   category: Category;
//   rate: number;
// };
