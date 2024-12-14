import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";

// Creating a context for the cart state and functions
const itemContext = createContext();

// Custom hook to access the cart context value easily
function useValue() {
  const value = useContext(itemContext);  
  return value;
}
// Context provider component to manage cart state and actions
function CustomItemContext({ children }) {
  // State variables for managing total price, number of items, showCart flag, and cart items
  const [total, setTotal] = useState(0);  //Total price of items in the cart
  const [item, setItem] = useState(0);   //Total number of items in the cart
  const [showCart, setShowCart] = useState(false); // Flag to control visibility of the cart modal
  const [cart, setCart] = useState([]); // Array to hold cart items

  // Function to handle adding an item to the cart
  const handleAdd = (prod) => {
    // Check if the product already exists in the cart
    const index = cart.findIndex((item) => item.id === prod.id);

    // If product doesn't exist, add it to the cart
    if (index === -1) {
      setCart([...cart, { ...prod, qty: 1 }]); // Add product with quantity 1
      console.log(cart);
      setTotal(total + prod.price); // Add the product price to the total
    } else {
      // If product exists, increment the quantity and update total
      cart[index].qty++;
      setCart(cart);     // Update the cart with the new quantity
      console.log(cart);
      setTotal(total + cart[index].price); // Add the price of the product to the total
    }
    setItem(item + 1); // Increment the total number of items
  };

  // Function to handle removing an item from the cart
  const handleRemove = (id) => {
    // Find the product index by id
    const index = cart.findIndex((item) => item.id === id);

    // If the product exists in the cart
    if (index !== -1) {
      cart[index].qty--; // Decrease the quantity of the product
      setItem(item - 1); // Decrease the total number of items
      setTotal(total - cart[index].price); // Subtract the product price from the total
      // If the quantity becomes 0, remove the product from the cart
      if (cart[index].qty === 0) {
        cart.splice(index, 1); // Remove item from the cart
      }
      setCart(cart); // Update the cart
    }
  };

  // Function to clear the cart (reset everything)
  const clear = () => {
    setTotal(0); // Reset the total price
    setItem(0); // Reset the total number of items
    setCart([]); // Clear the cart array
  };

  // Function to toggle the visibility of the cart modal
  const toggle = () => {
    setShowCart(!showCart); // Toggle the showCart state between true and false
  };

  // Providing the context value to the children components
  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, clear, toggle, cart }}
    >
      {showCart && <CartModal />} {/* Show CartModal if showCart is true */}
      {children} {/* Render children components inside the context provider */}
    </itemContext.Provider>
  );
}

// Export the custom hook to access the context
export { useValue };

// Export the context provider component
export default CustomItemContext;
