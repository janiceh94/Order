// useContext will always re-render when the context value changes
import { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props){
    const [btnBump, setBtnBump] = useState(false);

    const cartContext = useContext(CartContext);
    // object de-structuring to pull out the items from the cart
    const { items } = cartContext;
    // .reduce executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. Final result if running the reducer across all elements of the array is a single value
    const numberOfCartItems = items.reduce
    // calls two arguments
        // currentNumber - for every item in that array on what you're calling reduce
        // item - item which it is currently having a look at
    ((currentNumber, item) => {
        return currentNumber + item.amount;
        // 0 is starting value
    }, 0);

    
    const btnClasses = `${styles.button} ${btnBump ? styles.bump : ""}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnBump(true);
        // clean-up function, when the effect reruns, we clear the timer
        // set timer to fire after 300ms
        const timer = setTimeout(() => {
            setBtnBump(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        }
        // only items instead of entire context is a dependency
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
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