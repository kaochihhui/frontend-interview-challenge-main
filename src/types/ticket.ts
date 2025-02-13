export interface Ticket {
  id: string;
  name: string;
  description?: string;
  isVIP: boolean;
  count: number;
  price: number;
}

export interface CartItem extends Ticket {
  quantity: number;
}
