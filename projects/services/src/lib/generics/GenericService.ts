export interface ValueItem {
  id: number;
  name: string;
}
export interface ProductItem extends ValueItem {
  price: number;
  quantity: number;
}

export class GenericService<T extends ValueItem = ValueItem> {
  items: T[] = [];
}
