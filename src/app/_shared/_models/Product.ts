import { Photo } from './Photo';

export interface Product {
  id: number;
  productName: string;
  productType: string;
  photoUrl: string;
  photos?: Photo[];
}
