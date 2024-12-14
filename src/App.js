import "./App.css"; // Importing the CSS file for styling
import Items from "./components/Items"; // Importing the Items component (where products are listed)
import Navbar from "./components/Navbar"; // Importing the Navbar component
import CustomItemContext from "./itemContext"; // Importing the CustomItemContext (context provider for the cart)

function App() {
  return (
    // Wrapping the entire app with the CustomItemContext provider
    // This makes the cart context and its state available to all child components
    <CustomItemContext>
      <div className="App"> {/* Main container for the app */}
        <h2>Shopping Cart</h2> {/* Header displaying "Shopping Cart" */}
        <Navbar /> {/* The Navbar component */}
        <Items /> {/* The Items component, where products are displayed */}
      </div>
    </CustomItemContext>
  );
}

export default App; // Exporting the App component as default to be used in other parts of the app
