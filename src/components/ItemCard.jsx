import React from "react"; // Importing React library
import styles from "../styles/ItemCard.module.css"; // Importing the CSS module for styling the ItemCard component
import { useValue } from "../itemContext"; // Importing the custom hook 'useValue' to access cart context functions (handleAdd, handleRemove)

function ItemCard({ name, price, id }) {
  // Using the 'useValue' hook to get the functions for adding and removing items from the cart
  const { handleAdd, handleRemove } = useValue();

  return (
    <div className={styles.itemCard}> {/* Container for each individual item card */}
      
      {/* Displaying the item name */}
      <div className={styles.itemName}>{name}</div> 
      
      {/* Displaying the item price with the currency symbol (₹) */}
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      
      {/* Container for the "Add" and "Remove" buttons */}
      <div className={styles.itemButtonsWrapper}>
        
        {/* Add button: Adds the item to the cart by calling handleAdd with item data */}
        <button
          className={styles.itemButton}
          onClick={() => handleAdd({ id, name, price })} // Passes item details when clicked
        >
          Add {/* Button text */}
        </button>
        
        {/* Remove button: Removes the item from the cart by calling handleRemove with the item id */}
        <button
          className={styles.itemButton}
          onClick={() => handleRemove(id)} // Passes item id when clicked
        >
          Remove {/* Button text */}
        </button>
        
      </div>
    </div>
  );
}

export default ItemCard; // Exporting the ItemCard component to be used in other parts of the app
