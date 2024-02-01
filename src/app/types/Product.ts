import { Category } from './Category';

export type Product = {
  _id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  categoryId: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export type ProductAdmin = Omit<Product, 'id' | 'category'> & {
  _id: string;
  category: Category;
};
