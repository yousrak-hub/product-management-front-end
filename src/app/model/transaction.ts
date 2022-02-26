import { User } from './user';
import { Product } from './product';
export class Transaction {
  id: number;
  product: Product;
  user: User;
  purchaseDate: any;
}
