import React from "react"; // Importing React library
import styles from "../styles/Navbar.module.css"; // Importing the CSS module for styling the Navbar component
import { useValue } from "../itemContext"; // Importing the custom hook 'useValue' to access the cart context (total, item count, etc.)

function Navbar() {
  // Using the 'useValue' hook to access the cart context values (total, item count, and functions like clear and toggle)
  const { item, total, clear, toggle } = useValue();

  return (
    <div className={styles.container}> {/* Main container for the navbar */}
      
      {/* Displaying the total price of items in the cart, formatted with the currency symbol (₹) */}
      <h1>Total : &#x20B9; {total}</h1> 
      
      {/* Displaying the number of items in the cart */}
      <h1>Items: {item}</h1>

      <div className={styles.buttonsWrapper}> {/* Wrapper for the action buttons */}
        
        {/* Button to toggle the visibility of the cart modal */}
        <button className={styles.button} onClick={toggle}>
          Cart {/* Text displayed on the button */}
        </button>
        
        {/* Button to reset/clear the cart (remove all items and reset the total) */}
        <button className={styles.button} onClick={clear}>
          Reset {/* Text displayed on the button */}
        </button>

      </div>
    </div>
  );
}

export default Navbar; // Exporting the Navbar component so it can be used elsewhere in the app
