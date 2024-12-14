import React from "react"; // Importing React library
import { useValue } from "../itemContext"; // Importing the custom hook 'useValue' to access the cart context
import styles from "../styles/CartModal.module.css"; // Importing the CSS module for styling the cart modal

function CartModal() {
  // Destructuring the necessary values and functions from the cart context using the custom hook 'useValue'
  const { cart, clear, total, toggle } = useValue();

  return (
    <div className={styles.cartModal}> {/* Container for the entire cart modal */}
      
      {/* Close button to hide the modal by toggling the 'showCart' state */}
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      
      {/* Clear button to remove all items from the cart and reset the total */}
      <div className={styles.clearButton} onClick={clear}>
        Clear
      </div>

      {/* Loop through the cart items and display each item */}
      <div className={styles.itemContainer}>
        {cart.map((item) => {
          return (
            <div className = {styles.cartCard} key= {item.id}> {/* Displaying each item in the cart with a unique key */}
              <h1>{item.name}</h1> {/* Displaying the product name */}
              <h3>X {item.qty} </h3> {/* Displaying the quantity of the product */}
              <h3>X {item.qty * item.price}</h3> {/* Calculating and displaying the total price for this item (qty * price) */}
            </div>
          );
        })}
      </div>

      {/* Displaying the total price of all items in the cart */}
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div> {/* Label for the total */}
        <div className={styles.totalPrice}>{total}</div> {/* Displaying the total amount */}
      </div>
    </div>
  );
}

export default CartModal; // Exporting the CartModal component
