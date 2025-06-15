const PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Electronics",
    price: 1299,
    stock: 20,
  },
  {
    id: 2,
    name: "MacBook Air M2",
    category: "Electronics",
    price: 1499,
    stock: 12,
  },
  {
    id: 3,
    name: "Organic Almonds (1kg)",
    category: "Groceries",
    price: 19.99,
    stock: 50,
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Fitness",
    price: 39.95,
    stock: 100,
  },
  {
    id: 5,
    name: "Smart Watch Series X",
    category: "Electronics",
    price: 299.99,
    stock: 35,
  },
];

/**
 * Pure function that calculates the total price of all products.
 * @param {Array<Object>} products - Array of product object with a numeric 'price' field.
 * @returns {number} Total price of all products, rounded to 2 decimal places.
 * @throws {Error} If argument is not a valid array.
 */
export function calculateTotalPrice(products) {
  if (!Array.isArray(products)) {
    throw new Error(
      "calculateTotalPrice expects an array of product objects as the argument."
    );
  }
  const total = products.reduce((sum, product) => {
    if (typeof product.price !== "number") {
      throw new Error("Each product must have a numerice `price` property.");
    }

    return sum + product.price;
  }, 0);
  return parseFloat(total.toFixed(2));
}



console.log(calculateTotalPrice(PRODUCTS)); // $3157.93
// console.log(calculateTotalPrice()); // Error: calculateTotalPrice expects an array of product objects as the argument.

