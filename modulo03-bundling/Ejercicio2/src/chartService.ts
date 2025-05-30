// Function to calculate the total cost of items in the cart

export interface CartItem {
  price: number;
  quantity: number;
}
export function calculateTotalCost(cart: CartItem[]): number {
  return cart.reduce((totalCost, item) => totalCost + item.price * item.quantity, 0);
}
console.log(`Api base: ${process.env.API_BASE}`);
