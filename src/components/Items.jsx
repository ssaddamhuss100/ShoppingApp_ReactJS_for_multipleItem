import styles from "../styles/Item.module.css"; // Importing the CSS module for styling the Items component
import ItemCard from "./ItemCard"; // Importing the ItemCard component which displays individual item details
import itemData from "../data/itemData"; // Importing the data for items (array of items with their properties)

function Items() {
  return (
    <div className={styles.wrapper}> {/* Main wrapper div for displaying all items */}
      
      {/* Loop through the itemData array and render an ItemCard component for each item */}
      {itemData.map((item) => (
        <ItemCard
          key={item.id} // Unique key for each ItemCard (required for list rendering in React)
          id={item.id}   // Passing the item id as a prop to the ItemCard
          name={item.name} // Passing the item name as a prop to the ItemCard
          price={item.price} // Passing the item price as a prop to the ItemCard
        />
      ))}
      
    </div>
  );
}

export default Items; // Exporting the Items component to be used elsewhere in the app
