// Will always re-render when the context value changes
import { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props){
    const cartContext = useContext(CartContext);
    // .reduce executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. Final result if running the reducer across all elements of the array is a single value
    const numberOfCartItems = cartContext.items.reduce
    // calls two arguments
        // currentNumber - for every item in that array on what you're calling reduce
        // item - item which it is currently having a look at
    ((currentNumber, item) => {
        return currentNumber + item.amount;
        // 0 is starting value
    }, 0);

    return (
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}