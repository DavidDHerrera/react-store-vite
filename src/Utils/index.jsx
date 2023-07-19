/**
 * This function calculates totalPrice of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} TotalPrice
 */
export const totalPrices = (products) => {
    if (!Array.isArray(products)) {
      throw new Error("Input must be an array of products.");
    }
  
    const totalPrice = products.reduce((sum, { price }) => sum + price, 0);
  
    return totalPrice;
  };
  