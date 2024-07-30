/* Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items. */

function cart() {
  const products = [];

  const addProduct = (product) => {
    products.push(product);
    console.log(`${product}, added to cart`);
  };

  const removeProduct = (product) => {
    const index = products.indexOf(product);
    if (index !== -1) {
      products.splice(index, 1);
      console.log(`${product}, removed from cart`);
    } else {
      console.log(`${product}, not found`);
    }
  };

  const listProduct = () => {
    console.log("Cart Items");
    products.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  };

  return {
    addProduct,
    removeProduct,
    listProduct,
  };
}

let userCart = cart();

userCart.addProduct("Biryani");
userCart.addProduct("Salad");
userCart.addProduct("Cold Drink");
userCart.addProduct("Raita");
userCart.listProduct();

userCart.removeProduct("Biryani");
userCart.removeProduct("Salad");
userCart.removeProduct("Cold Drink");
userCart.listProduct();
