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
 * Pure function that returns a new array of products with discounted prices.
 * Does not mutate the original products array or its objects.
 * @param {Array<Object>} products  - Array of product objects with at least a 'price' field.
 * @param {number} discountPercent - Discount percentage to apply (0-100).
 * @returns {Array<Object>} - New array of products with updated 'price' and added 'originalPrice'.
 * @throws {Error} - When more than 100% discount applied.
 */
export function calculateDiscountedPrice(products, discountPercent) {
  if (!products || !Array.isArray(products)) {
    throw new Error(
      "calculateDiscountedPrice function expects an array of items as an argument"
    );
  }

  if (!discountPercent || isNaN(discountPercent)) {
    throw new Error(
      "calculateDiscountedPrice function expects discountPercent as an argument and it should be an integer between 0-100."
    );
  }

  if (discountPercent > 100) {
    throw new Error("Cannot apply more than 100% discount");
  }

  return products.map((product) => {
    const discounted = product.price * (1 - discountPercent / 100);
    return {
      ...product,
      price: parseFloat(discounted.toFixed(2)),
    };
  });
}

console.log(calculateDiscountedPrice(PRODUCTS, 10)); // All the products is now available with 10% discount
// console.log(calculateDiscountedPrice(PRODUCTS, 120)); // Throws an Error, since you can't apply more than 100% discount
// console.log(calculateDiscountedPrice(PRODUCTS, 'hi')); // Throws an Error, since you can't apply more than 100% discount
// console.log(calculateDiscountedPrice({price: 1000}, 'hi')); // Throws an Error, since you can't apply more than 100% discount
// console.log(calculateDiscountedPrice(10)); // Throws an Error, since you can't apply more than 100% discount
